import React, { useState, useEffect, ChangeEvent } from 'react';

const ThemeContext = React.createContext({
  theme: 'theme-one',
  changeTheme: (event: ChangeEvent<HTMLInputElement>) => {},
});

export const ThemeContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState('theme-one');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTheme(event.target.value);
    localStorage.setItem('theme', event.target.value);
  };

  const contextValue = {
    theme: theme,
    changeTheme: onChangeHandler,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
