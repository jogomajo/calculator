import { useContext } from 'react';

import ThemeContext from '../../store/theme-context';
import Key from './Key/Key';

import classes from './Keyboard.module.scss';

const Keyboard: React.FC = () => {
  const themeCtx = useContext(ThemeContext);

  const styles = [classes.keyboard, classes[themeCtx.theme]].join(' ');

  return (
    <div className={styles}>
      <Key id="7" digit />
      <Key id="8" digit />
      <Key id="9" digit />
      <Key id="DEL" special />
      <Key id="4" digit />
      <Key id="5" digit />
      <Key id="6" digit />
      <Key id="+" operator />
      <Key id="1" digit />
      <Key id="2" digit />
      <Key id="3" digit />
      <Key id="-" operator />
      <Key id="." decimal />
      <Key id="0" digit />
      <Key id="/" operator />
      <Key id="x" operator />
      <Key id="RESET" special wide />
      <Key id="=" equalSign wide />
    </div>
  );
};

export default Keyboard;
