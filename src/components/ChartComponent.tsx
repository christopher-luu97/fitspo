import React from "react";
import { Line } from "react-chartjs-2";
import { ChartOptions } from "chart.js";

interface ChartProps {
  title: string;
  goal: number;
  reached: number;
}

const ChartComponent: React.FC<ChartProps> = ({ title, goal, reached }) => {
  const data = {
    labels: ["Goal", "Reached"],
    datasets: [
      {
        label: title,
        data: [goal, reached],
        backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white shadow p-4 rounded-lg mb-4">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
