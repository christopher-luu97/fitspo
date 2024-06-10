import React, { useState } from "react";

const ExerciseTracker: React.FC = () => {
  const [exercise, setExercise] = useState<string>("");
  const [duration, setDuration] = useState<number | null>(null);
  const [exercises, setExercises] = useState<
    { name: string; duration: number }[]
  >([]);

  const handleAddExercise = () => {
    if (exercise && duration !== null) {
      setExercises([...exercises, { name: exercise, duration }]);
      setExercise("");
      setDuration(null);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Exercise Tracker</h2>
      <input
        type="text"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
        placeholder="Enter exercise"
        className="mt-2 p-2 border rounded w-full"
      />
      <input
        type="number"
        value={duration !== null ? duration : ""}
        onChange={(e) => setDuration(parseInt(e.target.value))}
        placeholder="Duration in minutes"
        className="mt-2 p-2 border rounded w-full"
      />
      <button
        onClick={handleAddExercise}
        className="mt-2 bg-red-500 text-white py-2 px-4 rounded"
      >
        Add Exercise
      </button>
      <div className="mt-4">
        <h3 className="text-xl">Exercise History</h3>
        <ul className="list-disc ml-4">
          {exercises.map((ex, index) => (
            <li key={index}>
              {ex.name} - {ex.duration} minutes
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExerciseTracker;
