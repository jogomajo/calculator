import classes from './ThemeSwitcher.module.scss';

const ThemeSwitcher: React.FC = () => {
  return (
    <div className={classes.theme}>
      <span>THEME</span>
      <span>switch</span>
    </div>
  );
};

export default ThemeSwitcher;
