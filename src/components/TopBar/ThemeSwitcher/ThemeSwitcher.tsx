import { useContext } from 'react';

import ThemeContext from '../../../store/theme-context';

import classes from './ThemeSwitcher.module.scss';

const ThemeSwitcher: React.FC = () => {
  const themeCtx = useContext(ThemeContext);

  const switcherStyles = [classes.switcher, classes[themeCtx.theme]].join(' ');
  const checkmarkStyles = [
    classes.checkmark,
    classes[`checkmark-${themeCtx.theme}`],
  ].join(' ');

  return (
    <div className={classes.theme}>
      <span>THEME</span>
      <div className={switcherStyles} onChange={themeCtx.changeTheme}>
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
