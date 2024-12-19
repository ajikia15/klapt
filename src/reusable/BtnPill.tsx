import React, { useState } from "react";
import "./BtnPill.css";

interface BtnPillProps {
  label?: string;
}

const BtnPill: React.FC<BtnPillProps> = ({ label = "" }) => {
  const [isActiveDarkMode, setIsActiveDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsActiveDarkMode(!isActiveDarkMode);
    console.log("set state to ", !isActiveDarkMode);
  };

  return (
    <button
      className={`btn-pill ${isActiveDarkMode ? "darkbtn" : "lightbtn"}`}
      onClick={toggleTheme}
    >
      {label}
      <div
        className={`switchball ${!isActiveDarkMode ? "left" : "right"}`}
      ></div>
    </button>
  );
};

export default BtnPill;

/// set up context
