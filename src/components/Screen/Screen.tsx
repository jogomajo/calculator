import { useContext } from 'react';

import ThemeContext from '../../store/theme-context';

import classes from './Screen.module.scss';

const Screen: React.FC = () => {
  const themeCtx = useContext(ThemeContext);

  const styles = [classes.screen, classes[themeCtx.theme]].join(' ');

  return (
    <div className={styles}>
      <span>399,981</span>
    </div>
  );
};

export default Screen;
