import React from "react";
import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to FitTrack</h1>
      <p className="text-lg mb-8">Your ultimate fitness tracking companion.</p>
      <div className="flex space-x-4">
        <Link
          to="/weight"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Track Weight
        </Link>
        <Link
          to="/calories"
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Track Calories
        </Link>
        <Link
          to="/exercises"
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
        >
          Track Exercises
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
