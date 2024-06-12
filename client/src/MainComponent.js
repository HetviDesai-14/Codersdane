// MainComponent.js
import React from "react";
import { useTheme } from "./ThemeContext";

const MainComponent = () => {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
    
    </div>
  );
};

export default MainComponent;
