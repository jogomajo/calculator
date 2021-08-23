import React, { useState } from 'react';

const MathContext = React.createContext({
  result: '',
  insertEquation: (value: string) => {},
  useOperator: (operator: string) => {},
  calculateEquation: () => {},
  resetResult: () => {},
  deleteLastNumber: () => {},
});

export const MathContextProvider: React.FC = ({ children }) => {
  const [result, setResult] = useState('');

  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');
  const [usedOperator, setUsedOperator] = useState('');
  const [clearScreen, setClearScreen] = useState(false);

  const insertEquation = (value: string) => {
    if (usedOperator === '') {
      setResult((prevResult) => prevResult + value);
      setFirstValue((prevFirstValue) => prevFirstValue + value);
    } else {
      if (clearScreen) setResult('');
      setClearScreen(false);

      setResult((prevResult) => prevResult + value);
      setSecondValue((prevSecondValue) => prevSecondValue + value);
    }
  };

  const calculateEquation = () => {
    let output = '';

    setResult('');

    switch (usedOperator) {
      case '+':
        output = (parseFloat(firstValue) + parseFloat(secondValue)).toString();
        break;
      case '-':
        output = (parseFloat(firstValue) - parseFloat(secondValue)).toString();
        break;
      case 'x':
        output = (parseFloat(firstValue) * parseFloat(secondValue)).toString();
        break;
      case '/':
        output = (parseFloat(firstValue) / parseFloat(secondValue)).toString();
        break;

      default:
        return;
    }

    setResult(output);
    setFirstValue(output);
  };

  const useOperator = (operator: string) => {
    if (result === '') return;

    setUsedOperator(operator);
    setResult(`${firstValue} ${operator}`);
    setClearScreen(true);
  };

  const resetResult = () => {
    setResult('');
    setUsedOperator('');
    setFirstValue('');
    setSecondValue('');
  };

  const deleteLastNumber = () => {
    setResult((prevResult) => prevResult.slice(0, -1));
  };

  const contextValue = {
    result: result,
    insertEquation: insertEquation,
    useOperator: useOperator,
    calculateEquation: calculateEquation,
    resetResult: resetResult,
    deleteLastNumber,
  };

  return (
    <MathContext.Provider value={contextValue}>{children}</MathContext.Provider>
  );
};

export default MathContext;
