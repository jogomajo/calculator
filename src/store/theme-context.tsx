import React, { useState, ChangeEvent } from 'react';

const ThemeContext = React.createContext({
  theme: 'theme-one',
  changeTheme: (event: ChangeEvent<HTMLInputElement>) => {},
});

export const ThemeContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState('theme-one');

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTheme(event.target.value);
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
