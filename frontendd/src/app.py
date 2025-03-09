from flask import Flask, jsonify
import pandas as pd
import numpy as np
from datetime import datetime
from sklearn.linear_model import LinearRegression
from flask_cors import CORS  # Enable CORS for frontend-backend communication

app = Flask(__name__)
CORS(app)  # Allow all origins for now

# Function to categorize CUR
def categorize_cur(cur):
    if cur <= 9:
        return "Excellent"
    elif cur <= 29:
        return "Good"
    elif cur <= 49:
        return "Fair"
    elif cur <= 74:
        return "Poor"
    else:
        return "Very Poor"

# Function to process and predict CUR
def process_and_predict(user_id, credit_limit=8000):
    file_path = "result.csv"
    
    try:
        df = pd.read_csv(file_path)
    except FileNotFoundError:
        return {"error": "CSV file not found"}
    
    if df.empty:
        return {"error": "CSV file is empty"}
    
    df['date'] = pd.to_datetime(df['date'], errors='coerce')  # Handle invalid dates
    df.dropna(subset=['date'], inplace=True)  # Drop rows where date conversion failed
    df['year_month'] = df['date'].dt.to_period('M')

    # Ensure user_id is treated as integer
    df['user_id'] = pd.to_numeric(df['user_id'], errors='coerce').fillna(0).astype(int)

    user_data = df[df['user_id'] == int(user_id)]  # Convert input to int explicitly
    if user_data.empty:
        return {"error": f"No data found for user {user_id}"}

    results = {}
    for card, card_data in user_data.groupby('card_type'):
        card_data['amount'] = pd.to_numeric(card_data['amount'], errors='coerce').fillna(0)  # Fix potential NaN values
        monthly_spent = card_data.groupby('year_month')['amount'].sum().sort_index()
        cur_values = (monthly_spent / credit_limit * 100).round(2)

        if len(cur_values) < 2:
            return {"error": f"Not enough data to predict CUR for user {user_id}"}

        months = np.arange(len(cur_values)).reshape(-1, 1)
        model = LinearRegression()
        model.fit(months, cur_values.values)
        next_month = np.array([[len(months)]])
        predicted_cur = model.predict(next_month)[0].round(2)

        cur_classifications = [categorize_cur(cur) for cur in cur_values]
        predicted_classification = categorize_cur(predicted_cur)

        results[card] = {
            "CUR Values": list(cur_values),
            "CUR Categories": cur_classifications,
            "Predicted CUR": predicted_cur,
            "Predicted Category": predicted_classification
        }

    return results

@app.route('/api/getCUR/<int:user_id>', methods=['GET'])
def predict(user_id):
    result = process_and_predict(user_id)
    return jsonify(result), 200 if "error" not in result else 404

if __name__ == '__main__':
    app.run(debug=True)
