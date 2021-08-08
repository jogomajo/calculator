import React, { useState } from 'react';

const MathContext = React.createContext({
  result: '',
  setResult: (id: string) => {},
  resetResult: () => {},
  deleteLastNumber: () => {},
});

export const MathContextProvider: React.FC = ({ children }) => {
  const [result, setResult] = useState('');

  const resetResult = () => {
    setResult('');
  };

  const deleteLastNumber = () => {
    setResult((prevResult) => prevResult.slice(0, -1));
  };

  const contextValue = {
    result: result,
    setResult: setResult,
    resetResult: resetResult,
    deleteLastNumber,
  };

  return (
    <MathContext.Provider value={contextValue}>{children}</MathContext.Provider>
  );
};

export default MathContext;
