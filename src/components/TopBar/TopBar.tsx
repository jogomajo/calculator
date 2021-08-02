import { ChangeEvent } from 'react';

import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';

import classes from './TopBar.module.scss';

interface ITopBarProps {
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  theme: string;
}

const TopBar: React.FC<ITopBarProps> = ({ onChangeHandler, theme }) => {
  // console.log(`TopBar`);
  // console.log(theme);
  const styles = [classes.topbar, classes[theme]].join(' ');

  return (
    <div className={styles}>
      <span>calc</span>
      <ThemeSwitcher theme={theme} onChangeHandler={onChangeHandler} />
    </div>
  );
};

export default TopBar;
