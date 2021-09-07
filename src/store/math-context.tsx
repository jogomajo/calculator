import React, { useState } from 'react';

const MathContext = React.createContext({
  onScreen: '',
  insertEquation: (value: string) => {},
  useOperator: (operator: string) => {},
  useDecimal: () => {},
  calculateEquation: () => {},
  resetResult: () => {},
  deleteLastNumber: () => {},
});

export const MathContextProvider: React.FC = ({ children }) => {
  const [onScreen, setOnScreen] = useState('');

  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');
  const [usedOperator, setUsedOperator] = useState('');
  const [clearScreen, setClearScreen] = useState(false);

  const insertEquation = (value: string) => {
    if (
      value === '0' &&
      onScreen.startsWith('0') &&
      !onScreen.startsWith('0.')
    ) {
      return;
    }

    if (usedOperator === '') {
      setOnScreen((prevOnScreen) => prevOnScreen + value);
      setFirstValue((prevFirstValue) => prevFirstValue + value);
    } else {
      if (clearScreen) setOnScreen('');
      setClearScreen(false);

      setOnScreen((prevOnScreen) => prevOnScreen + value);
      setSecondValue((prevSecondValue) => prevSecondValue + value);
    }
  };

  const calculateEquation = () => {
    let result: string | number = '';

    switch (usedOperator) {
      case '+':
        result = parseFloat(firstValue) + parseFloat(secondValue);
        break;
      case '-':
        result = parseFloat(firstValue) - parseFloat(secondValue);
        break;
      case 'x':
        result = parseFloat(firstValue) * parseFloat(secondValue);
        break;
      case '/':
        result = parseFloat(firstValue) / parseFloat(secondValue);
        break;

      default:
        return;
    }

    result = (Math.round(result * 100) / 100).toString();

    setOnScreen(result);
    setFirstValue(result);
    setSecondValue('');
    setUsedOperator('');
  };

  const useOperator = (operator: string) => {
    if (onScreen === '') return;

    setUsedOperator(operator);
    setOnScreen(`${firstValue} ${operator}`);
    setClearScreen(true);
  };

  const useDecimal = () => {
    if (usedOperator === '') {
      if (firstValue === '') {
        setOnScreen('0.');
        setFirstValue('0.');
        return;
      }

      if (!onScreen.includes('.')) {
        setOnScreen((prevOnScreen) => prevOnScreen + '.');
        setFirstValue((prevFirstValue) => prevFirstValue + '.');
      }
    } else {
      if (clearScreen) setOnScreen('');
      setClearScreen(false);

      if (secondValue === '') {
        setOnScreen('0.');
        setSecondValue('0.');
        return;
      }

      if (!onScreen.includes('.')) {
        setOnScreen((prevOnScreen) => prevOnScreen + '.');
        setSecondValue((prevSecondValue) => prevSecondValue + '.');
      }
    }
  };

  const resetResult = () => {
    setOnScreen('');
    setUsedOperator('');
    setFirstValue('');
    setSecondValue('');
  };

  const deleteLastNumber = () => {
    setOnScreen((prevOnScreen) => prevOnScreen.slice(0, -1));

    if (usedOperator === '') {
      setFirstValue((prevFirstValue) => prevFirstValue.slice(0, -1));
    } else {
      setSecondValue((prevSecondValue) => prevSecondValue.slice(0, -1));
    }
  };

  const contextValue = {
    onScreen,
    insertEquation,
    useOperator,
    useDecimal,
    calculateEquation,
    resetResult,
    deleteLastNumber,
  };

  return (
    <MathContext.Provider value={contextValue}>{children}</MathContext.Provider>
  );
};

export default MathContext;
