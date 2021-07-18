import classes from './CalcLayout.module.scss';

const CalcLayout: React.FC = ({ children }) => {
  return <div className={classes.calculator}>{children}</div>;
};

export default CalcLayout;
