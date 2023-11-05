import React, { useState } from "react";
import Toggle from "react-toggle";

export const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className="toggle-container">
    <Toggle
      checked={isDark}
      onChange={({ target }) => setIsDark(target.checked)}
      icons={{ checked: "🌙", unchecked: "🔆" }}
      aria-label="Dark Mode Toggle"
    />
    </div>
  );
};
