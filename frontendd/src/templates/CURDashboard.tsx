import { Link } from "react-router-dom";
import React, { useState } from "react";

interface CURData {
  [cardType: string]: {
    "CUR Values": number[];
    "CUR Categories": string[];
    "Predicted CUR": number;
    "Predicted Category": string;
  };
}

const CURDashboard: React.FC = () => {
  const [userId, setUserId] = useState("");
  const [data, setData] = useState<CURData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/predict?user_id=${userId}`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-sm mb-6">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Financial Dashboard</h1>
          <Link to={'/cuf'}>
            <h1 className="text-[17px] relative top-[2px] font-semibold text-gray-900">Get CUR Insights</h1>
          </Link>
        </div>
      </header>

      <div className="w-[80%] m-auto text-center">
        <input
          type="number"
          placeholder="Enter User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg mr-2"
        />
        <button
          onClick={fetchData}
          disabled={!userId.trim() || loading}
          className={`px-4 py-2 rounded-lg ${loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"} text-white`}
        >
          {loading ? "Fetching..." : "Fetch Data"}
        </button>
      </div>

      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

      <h1 className="text-2xl font-bold mb-4 mx-auto text-center">Credit Utilization Ratio (CUR) Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-[80%] relative m-auto">
        {data ? Object.entries(data).map(([card, details]) => (
          <div key={card} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{card}</h2>
            <p className="text-gray-600">Previous CUR Values:</p>
            <ul className="list-disc ml-4">
              {details["CUR Values"].map((value, index) => (
                <li key={index}>
                  {value} ({details["CUR Categories"][index]})
                </li>
              ))}
            </ul>
            <p className="mt-2 font-semibold">Predicted CUR: {details["Predicted CUR"]}</p>
            <p className="text-sm text-gray-500">
              Category: <span className="font-semibold">{details["Predicted Category"]}</span>
            </p>
          </div>
        )) : (
          !loading && !error && <p className="text-gray-500 text-center">Enter a user ID to fetch data</p>
        )}
      </div>
    </div>
  );
};


export default CURDashboard;
