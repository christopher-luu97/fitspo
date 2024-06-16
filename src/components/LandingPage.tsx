import React, { useState } from "react";
import { Link } from "react-router-dom";
import { metricsData } from "../data";
import ChartComponent from "./ChartComponent";
import "../chartjs-setup";

const LandingPage: React.FC = () => {
  const [timeframe, setTimeframe] = useState<
    "daily" | "weekly" | "monthly" | "yearly"
  >("daily");

  const { calorieGoal, caloriesReached, exerciseGoal, exerciseDone, steps } =
    metricsData[timeframe];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 sm:p-8 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">
        Welcome to FitTrack
      </h1>
      <p className="text-base sm:text-lg mb-8">
        Your ultimate fitness tracking companion.
      </p>

      <div className="flex space-x-2 mb-6">
        {["daily", "weekly", "monthly", "yearly"].map((tf) => (
          <button
            key={tf}
            onClick={() =>
              setTimeframe(tf as "daily" | "weekly" | "monthly" | "yearly")
            }
            className={`px-2 py-1 sm:px-4 sm:py-2 rounded ${
              timeframe === tf
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            } hover:bg-blue-700`}
          >
            {tf.charAt(0).toUpperCase() + tf.slice(1)}
          </button>
        ))}
      </div>

      <div className="w-full max-w-xs sm:max-w-md flex flex-col space-y-4">
        <ChartComponent
          title="Calories"
          goal={calorieGoal}
          reached={caloriesReached}
        />
        <ChartComponent
          title="Exercise (minutes)"
          goal={exerciseGoal}
          reached={exerciseDone}
        />
        <div className="bg-white shadow p-4 rounded-lg">
          <h2 className="text-xl sm:text-2xl font-semibold">Steps</h2>
          <p>{steps} steps</p>
        </div>
      </div>

      <div className="flex space-x-2 sm:space-x-4 mt-8">
        <Link
          to="/weight"
          className="bg-blue-500 text-white py-1 px-2 sm:py-2 sm:px-4 rounded hover:bg-blue-700"
        >
          Track Weight
        </Link>
        <Link
          to="/calories"
          className="bg-green-500 text-white py-1 px-2 sm:py-2 sm:px-4 rounded hover:bg-green-700"
        >
          Track Calories
        </Link>
        <Link
          to="/exercises"
          className="bg-red-500 text-white py-1 px-2 sm:py-2 sm:px-4 rounded hover:bg-red-700"
        >
          Track Exercises
        </Link>
        <Link
          to="/progress-photos"
          className="bg-purple-500 text-white py-1 px-2 sm:py-2 sm:px-4 rounded hover:bg-purple-700"
        >
          View Progress Photos
        </Link>{" "}
        {/* Add the new button */}
      </div>
    </div>
  );
};

export default LandingPage;
