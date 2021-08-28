import { useContext } from 'react';

import ThemeContext from '../../store/theme-context';
import MathContext from '../../store/math-context';

import classes from './Screen.module.scss';

const Screen: React.FC = () => {
  const themeCtx = useContext(ThemeContext);
  const mathCtx = useContext(MathContext);

  const styles = [classes.screen, classes[themeCtx.theme]].join(' ');

  return (
    <div className={styles}>
      <span>{mathCtx.onScreen ? mathCtx.onScreen : '0'}</span>
    </div>
  );
};

export default Screen;
