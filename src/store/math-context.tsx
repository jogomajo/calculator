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
    let result = '';

    switch (usedOperator) {
      case '+':
        result = (parseFloat(firstValue) + parseFloat(secondValue)).toString();
        break;
      case '-':
        result = (parseFloat(firstValue) - parseFloat(secondValue)).toString();
        break;
      case 'x':
        result = (parseFloat(firstValue) * parseFloat(secondValue)).toString();
        break;
      case '/':
        result = (parseFloat(firstValue) / parseFloat(secondValue)).toString();
        break;

      default:
        return;
    }

    setOnScreen(result);
    setFirstValue(result);
    setSecondValue('');
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
    if (usedOperator === '') {
      setOnScreen((prevOnScreen) => prevOnScreen.slice(0, -1));
      setFirstValue((prevFirstValue) => prevFirstValue.slice(0, -1));
    } else {
      setOnScreen((prevOnScreen) => prevOnScreen.slice(0, -1));
      setSecondValue((prevSecondValue) => prevSecondValue.slice(0, -1));
    }
  };

  const contextValue = {
    onScreen: onScreen,
    insertEquation: insertEquation,
    useOperator: useOperator,
    useDecimal: useDecimal,
    calculateEquation: calculateEquation,
    resetResult: resetResult,
    deleteLastNumber,
  };

  return (
    <MathContext.Provider value={contextValue}>{children}</MathContext.Provider>
  );
};

export default MathContext;
