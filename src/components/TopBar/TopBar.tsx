import { useContext } from 'react';

import ThemeContext from '../../store/theme-context';
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';

import classes from './TopBar.module.scss';

const TopBar: React.FC = () => {
  const themeCtx = useContext(ThemeContext);

  const styles = [classes.topbar, classes[themeCtx.theme]].join(' ');

  return (
    <div className={styles}>
      <span>calc</span>
      <ThemeSwitcher />
    </div>
  );
};

export default TopBar;
