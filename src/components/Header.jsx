import { FaMoon, FaSun } from "react-icons/fa";
import { useGlobalContext } from "../context/useGlobalContext";
function Header() {
  const { isDarkMode, setIsDarkMode } = useGlobalContext();
  return (
    <header className="header">
      <div className="header-content-wrapper flex">
        <h1>Where in the world?</h1>
        <button
          className="toggle-theme"
          onClick={() => setIsDarkMode((prev) => !prev)}
        >
          {isDarkMode ? (
            <span className="flex">
              <FaMoon />
              Dark Mode
            </span>
          ) : (
            <span className="flex">
              <FaSun />
              Light Mode
            </span>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
