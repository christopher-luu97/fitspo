import React, { useState } from "react";

const CalorieTracker: React.FC = () => {
  const [calories, setCalories] = useState<number>(0);
  const [calorieIntake, setCalorieIntake] = useState<number[]>([]);

  const handleAddCalories = () => {
    setCalorieIntake([...calorieIntake, calories]);
    setCalories(0);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Calorie Tracker</h2>
      <input
        type="number"
        value={calories}
        onChange={(e) => setCalories(parseInt(e.target.value))}
        placeholder="Enter calories"
        className="mt-2 p-2 border rounded w-full"
      />
      <button
        onClick={handleAddCalories}
        className="mt-2 bg-green-500 text-white py-2 px-4 rounded"
      >
        Add Calories
      </button>
      <div className="mt-4">
        <h3 className="text-xl">Calorie Intake History</h3>
        <ul className="list-disc ml-4">
          {calorieIntake.map((c, index) => (
            <li key={index}>{c} kcal</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CalorieTracker;
