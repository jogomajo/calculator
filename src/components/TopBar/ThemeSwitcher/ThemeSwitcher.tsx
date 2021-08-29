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

  console.log(themeCtx.theme);

  return (
    <div className={classes.theme}>
      <span>THEME</span>
      <div className={switcherStyles}>
        <label className={classes.option}>
          1
          <input
            type="radio"
            name="radio"
            value="theme-one"
            checked={themeCtx.theme === 'theme-one'}
            onChange={themeCtx.changeTheme}
          />
          <span className={checkmarkStyles}></span>
        </label>
        <label className={classes.option}>
          2
          <input
            type="radio"
            name="radio"
            value="theme-two"
            checked={themeCtx.theme === 'theme-two'}
            onChange={themeCtx.changeTheme}
          />
          <span className={checkmarkStyles}></span>
        </label>
        <label className={classes.option}>
          3
          <input
            type="radio"
            name="radio"
            value="theme-three"
            checked={themeCtx.theme === 'theme-three'}
            onChange={themeCtx.changeTheme}
          />
          <span className={checkmarkStyles}></span>
        </label>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
