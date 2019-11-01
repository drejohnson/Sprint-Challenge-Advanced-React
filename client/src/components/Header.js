import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Header = ({ title }) => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <header>
      <h1>{title}</h1>
      <div data-testid='toggle' className='dark-mode__toggle'>
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </header>
  );
};

export default Header;
