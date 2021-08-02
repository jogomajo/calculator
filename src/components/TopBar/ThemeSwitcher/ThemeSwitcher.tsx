import { ChangeEvent } from 'react';

import classes from './ThemeSwitcher.module.scss';

interface IThemeSwitcherProps {
  theme: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const ThemeSwitcher: React.FC<IThemeSwitcherProps> = ({
  theme,
  onChangeHandler,
}) => {
  const switcherStyles = [classes.switcher, classes[theme]].join(' ');
  const checkmarkStyles = [
    classes.checkmark,
    classes[`checkmark-${theme}`],
  ].join(' ');

  return (
    <div className={classes.theme}>
      <span>THEME</span>
      <div className={switcherStyles} onChange={onChangeHandler}>
        <label className={classes.option}>
          1
          <input type="radio" name="radio" value="theme-one" defaultChecked />
          <span className={checkmarkStyles}></span>
        </label>
        <label className={classes.option}>
          2
          <input type="radio" name="radio" value="theme-two" />
          <span className={checkmarkStyles}></span>
        </label>
        <label className={classes.option}>
          3
          <input type="radio" name="radio" value="theme-three" />
          <span className={checkmarkStyles}></span>
        </label>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
