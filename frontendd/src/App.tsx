import React, { useState } from "react";
import { Search, Loader2 } from "lucide-react";
import axios from "axios";
import { TransactionTable } from "./components/TransactionTable";
import { InvestmentChart } from "./components/InvestmentChart";
import { UserFinancialData } from "./types";
import { mockFinancialData } from "./mockData";
import clsx from "clsx";
import FinancialDashboard from "./components/FinancialDashboard";
import {Link} from 'react-router-dom';
import CURDashboard from './templates/CURDashboard'
function App() {
  const [component, setComponent] = useState(false);
  const [userId, setUserId] = useState("");
  const [amountId, setAmountId] = useState("");
  const [userData, setUserData] = useState<UserFinancialData | null>(null);
  const [error, setError] = useState("");
  const [radioValue, setRadioValue] = useState("greater");
  const [isLoading, setIsLoading] = useState(false);
  const [usersData, setUsersData] = useState<UserFinancialData>(null);

  const handleFetchData = async () => {
    setComponent(false)
    if (!userId.trim()) {
      setError("Please enter a User ID");
      return;
    }

    setIsLoading(true);
    setError("");
    setUserData(null);

    try {
      console.log("hi");
      const response = await axios.get(`http://localhost:3000/data/${userId}`);
      console.log(response.data.data);
      setUserData(response.data.data);
      setIsLoading(false);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleFetchData();
    }
  };

  const handleAmountData = async () => {
    // if (!amountId.trim() || !userId.trim()) {
    if (!amountId.trim()) {
      setError("Please enter a Amount or userid");
      return;
    }

    setIsLoading(true);
    setError("");
    setAmountId("");

    try {
      console.log("hi");
      const response = await axios.get(
        `http://localhost:3000/amount/${amountId}/${radioValue}`
      );
      console.log(response.data.data);
      setComponent(true);
      setUsersData(response.data.data);
      setIsLoading(false);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between">
          <Link to={'/'}>
          <h1 className="text-2xl font-bold text-gray-900">
            Financial Dashboard
          </h1>
          </Link>
          <Link to={'/cuf'}>
          <h1 className="text-[17px] relative top-[2px] font-semibold text-gray-900">
            Get CUR Insights
          </h1>
          </Link>
          {/* {process.env.NODE_ENV === 'development' && (
            // <p className="text-sm text-gray-500 mt-1">Try using User ID: "2" for mock data</p>
          )} */}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Search Section */}
        <div className="mb-8">
          <div className="max-w-[80%] flex justify-between w-[100%] relative m-auto gap-[100px]">
            <div className="mt-1 flex h-10 rounded-md shadow-sm">
              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter User ID (e.g., 2)"
                disabled={isLoading}
                className={clsx(
                  "flex-1 min-w-9 block w-full px-3 py-2 rounded-l-md border",
                  "focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                  isLoading ? "bg-gray-100" : "bg-white",
                  "border-gray-300"
                )}
              />
              <button
                onClick={handleFetchData}
                disabled={isLoading}
                className={clsx(
                  "inline-flex items-center px-4 py-2 border border-transparent",
                  "text-sm font-medium rounded-r-md text-white",
                  isLoading
                    ? "bg-indigo-400"
                    : "bg-indigo-600 hover:bg-indigo-700",
                  "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                  "transition-colors duration-200"
                )}
              >
                {isLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    <Search className="h-5 w-5 mr-2" />
                    Fetch Details
                  </>
                )}
              </button>
            </div>
            <div className="mt-1 flex rounded-md shadow-sm flex-col">
              <span className="flex">
                <input
                  type="text"
                  value={amountId}
                  onChange={(e) => setAmountId(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter Transaction amount "
                  disabled={isLoading}
                  className={clsx(
                    "flex-1 min-w-0 block w-full px-3 py-2 rounded-l-md border",
                    "focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                    isLoading ? "bg-gray-100" : "bg-white",
                    "border-gray-300"
                  )}
                />
                <button
                  onClick={handleAmountData}
                  disabled={isLoading}
                  className={clsx(
                    "inline-flex items-center px-4 py-2 border border-transparent",
                    "text-sm font-medium rounded-r-md text-white",
                    isLoading
                      ? "bg-indigo-400"
                      : "bg-indigo-600 hover:bg-indigo-700",
                    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                    "transition-colors duration-200"
                  )}
                >
                  {isLoading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <>
                      <Search className="h-5 w-5 mr-2" />
                      Fetch Details
                    </>
                  )}
                </button>
              </span>
              <div className="p-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value="greater"
                    checked={radioValue === "greater"}
                    onChange={() => setRadioValue("greater")}
                    className="mr-2"
                  />
                  Greater
                </label>

                <label className="flex items-center space-x-2 mt-2">
                  <input
                    type="radio"
                    value="lesser"
                    checked={radioValue === "lesser"}
                    onChange={() => setRadioValue("lesser")}
                    className="mr-2"
                  />
                  Lesser
                </label>

                <p className="mt-4">Selected: {radioValue || "None"}</p>
              </div>
            </div>

            {error && (
              <p className="mt-2 text-sm text-red-600 bg-red-50 p-2 rounded-md">
                {error}
              </p>
            )}
          </div>
        </div>

        {component && (
          <>
            <FinancialDashboard userData={usersData} />
          </>
        )}

        {isLoading && (
          <div className="text-center py-12">
            <Loader2 className="h-8 w-8 animate-spin mx-auto text-indigo-600" />
            <p className="mt-2 text-sm text-gray-500">
              Loading financial data...
            </p>
          </div>
        )}

        {userData && !isLoading && (
          <div className="space-y-6">
            {/* Investment Portfolio */}
            <InvestmentChart investments={userData.portfolio} />

            {/* Bank Transactions */}
            <TransactionTable
              data={userData.transactions}
              title="Bank Transactions"
              type="transaction"
            />

            {/* Credit Card Transactions */}
            <TransactionTable
              data={userData.credit_cards}
              title="Credit Card Transactions"
              type="credit"
            />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
