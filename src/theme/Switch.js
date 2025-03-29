import "./ThemeStyles.css";
import { useTheme } from "./ThemeContext";
import { lightTheme } from "./theme";
import { darkTheme } from "./theme";
const Switch = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === darkTheme}
        onChange={toggleTheme}
      />
      <span className="slider round" />
    </label>
  );
};
export default Switch;