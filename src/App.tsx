import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WeightTracker from "./components/WeightTracker";
import CalorieTracker from "./components/CalorieTracker";
import ExerciseTracker from "./components/ExerciseTracker";
import LandingPage from "./components/LandingPage";
import BottomNav from "./components/BottomNav";
import ProgressPhotos from "./components/ProgressPhotos";

const App: React.FC = () => {
  return (
    <Router>
      <div className="pb-16">
        {" "}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/weight" element={<WeightTracker />} />
          <Route path="/calories" element={<CalorieTracker />} />
          <Route path="/exercises" element={<ExerciseTracker />} />
          <Route path="/progress-photos" element={<ProgressPhotos />} />{" "}
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
};

export default App;
