import { FiMoon, FiSun } from "react-icons/fi";
import { useState, useEffect } from "react";

function DarkTheme() {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", darkTheme);
  }, [darkTheme]);

  return (
    <div
      className="nav__shop"
      onClick={toggleTheme}
      aria-label={darkTheme ? "Turn on light mode" : "Turn on dark mode"}
    >
      {darkTheme ? <FiSun /> : <FiMoon />}
    </div>
  );
}

export default DarkTheme;
