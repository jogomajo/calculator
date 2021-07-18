import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';

import classes from './TopBar.module.scss';

const TopBar: React.FC = () => {
  return (
    <div className={classes.topbar}>
      <span>calc</span>
      <ThemeSwitcher />
    </div>
  );
};

export default TopBar;
