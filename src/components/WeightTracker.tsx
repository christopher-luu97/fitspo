import React, { useState } from "react";
import { Link } from "react-router-dom";

const WeightTracker: React.FC = () => {
  const [weight, setWeight] = useState<number | null>(null);
  const [weightHistory, setWeightHistory] = useState<number[]>([]);

  const handleAddWeight = () => {
    if (weight !== null) {
      setWeightHistory([...weightHistory, weight]);
      setWeight(null);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Weight Tracker</h2>
      <input
        type="number"
        value={weight !== null ? weight : ""}
        onChange={(e) => setWeight(parseFloat(e.target.value))}
        placeholder="Enter your weight"
        className="mt-2 p-2 border rounded w-full"
      />
      <button
        onClick={handleAddWeight}
        className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Add Weight
      </button>
      <div className="mt-4">
        <h3 className="text-xl">Weight History</h3>
        <ul className="list-disc ml-4">
          {weightHistory.map((w, index) => (
            <li key={index}>{w} kg</li>
          ))}
        </ul>
      </div>
      <Link
        to="/progress-photos"
        className="mt-4 bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-700 inline-block"
      >
        View Progress Photos
      </Link>
    </div>
  );
};

export default WeightTracker;
