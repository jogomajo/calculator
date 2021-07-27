import { ChangeEvent } from 'react';

import classes from './ThemeSwitcher.module.scss';

interface IThemeSwitcherProps {
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const ThemeSwitcher: React.FC<IThemeSwitcherProps> = ({ onChangeHandler }) => {
  return (
    <div className={classes.theme}>
      <span>THEME</span>
      <div className={classes.switcher} onChange={onChangeHandler}>
        <label className={classes.option}>
          1
          <input type="radio" name="radio" value="theme-one" defaultChecked />
          <span className={classes.checkmark}></span>
        </label>
        <label className={classes.option}>
          2
          <input type="radio" name="radio" value="theme-two" />
          <span className={classes.checkmark}></span>
        </label>
        <label className={classes.option}>
          3
          <input type="radio" name="radio" value="theme-three" />
          <span className={classes.checkmark}></span>
        </label>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
