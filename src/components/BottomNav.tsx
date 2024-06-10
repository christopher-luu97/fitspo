import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaWeight, FaFire, FaDumbbell } from "react-icons/fa";

const BottomNav: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: <FaHome /> },
    { path: "/weight", label: "Weight", icon: <FaWeight /> },
    { path: "/calories", label: "Calories", icon: <FaFire /> },
    { path: "/exercises", label: "Exercises", icon: <FaDumbbell /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200">
      <div className="flex justify-around p-2">
        {navItems.map((item) => (
          <Link
            to={item.path}
            key={item.path}
            className={`flex flex-col items-center text-center p-2 ${
              location.pathname === item.path
                ? "text-blue-500"
                : "text-gray-600"
            }`}
          >
            <div className="text-2xl">{item.icon}</div>
            <span className="text-sm">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
