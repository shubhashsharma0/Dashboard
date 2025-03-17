// ThemeToggle.js
import React from 'react';

function ThemeToggle({ darkMode, toggleTheme }) {
  return (
    <button className="btn btn-outline-secondary" onClick={toggleTheme}>
      {darkMode ? 'Light' : 'Dark'}
    </button>
  );
}

export default ThemeToggle;
