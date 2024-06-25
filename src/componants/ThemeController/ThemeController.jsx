import { useState } from "react";

function ThemeController() {
  const [theme, setTheme] = useState(true);

  function handleThemeClick() {
    setTheme(!theme);
  }

  if (theme) {
    return (
      <div>
        <button onClick={handleThemeClick}>DARK MODE</button>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={handleThemeClick}>LIGHT MODE</button>
      </div>
    );
  }
}

export default ThemeController;
