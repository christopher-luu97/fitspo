import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart.js components
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const WeightTracker: React.FC = () => {
  const [weight, setWeight] = useState<number | null>(null);
  const [weightHistory, setWeightHistory] = useState<
    { date: string; weight: number }[]
  >([]);

  // Load weight history from local storage
  useEffect(() => {
    const storedWeightHistory = localStorage.getItem("weightHistory");
    if (storedWeightHistory) {
      setWeightHistory(JSON.parse(storedWeightHistory));
    }
  }, []);

  // Save weight history to local storage
  useEffect(() => {
    localStorage.setItem("weightHistory", JSON.stringify(weightHistory));
  }, [weightHistory]);

  const handleAddWeight = () => {
    if (weight !== null) {
      const newEntry = { date: new Date().toISOString().split("T")[0], weight };
      setWeightHistory([...weightHistory, newEntry]);
      setWeight(null);
    }
  };

  // Prepare data for chart
  const chartData = {
    labels: weightHistory.map((entry) => entry.date),
    datasets: [
      {
        label: "Weight (kg)",
        data: weightHistory.map((entry) => entry.weight),
        fill: false,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Weight Trend",
        color: "white",
      },
      tooltip: {
        callbacks: {
          labelColor: () => ({
            borderColor: "white",
            backgroundColor: "white",
          }),
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
          color: "white",
        },
        ticks: {
          color: "white",
        },
      },
      y: {
        title: {
          display: true,
          text: "Weight (kg)",
          color: "white",
        },
        ticks: {
          color: "white",
        },
        suggestedMin:
          Math.min(...weightHistory.map((entry) => entry.weight)) - 5,
        suggestedMax:
          Math.max(...weightHistory.map((entry) => entry.weight)) + 5,
      },
    },
  };

  return (
    <div className="p-4 bg-gray-900 text-white shadow rounded-lg max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Weight Tracker</h2>
      <input
        type="number"
        value={weight !== null ? weight : ""}
        onChange={(e) => setWeight(parseFloat(e.target.value))}
        placeholder="Enter your weight"
        className="mt-2 p-2 border rounded w-full mb-4 bg-gray-800 text-white border-gray-700"
      />
      <button
        onClick={handleAddWeight}
        className="mt-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Add Weight
      </button>
      <div className="mt-4">
        <h3 className="text-xl mb-2">Weight History</h3>
        <ul className="list-disc ml-4 mb-4">
          {weightHistory.map((entry, index) => (
            <li key={index}>
              {entry.date}: {entry.weight} kg
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <Line data={chartData} options={chartOptions} />
      </div>
      <Link
        to="/progress-photos"
        className="mt-4 bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 inline-block"
      >
        View Progress Photos
      </Link>
    </div>
  );
};

export default WeightTracker;
