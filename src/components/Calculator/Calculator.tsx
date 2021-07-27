import classes from './Calculator.module.scss';

const Calculator: React.FC = ({ children }) => {
  return <div className={classes.calculator}>{children}</div>;
};

export default Calculator;
