import { useContext } from 'react';

import ThemeContext from '../../../store/theme-context';
import MathContext from '../../../store/math-context';

import classes from './Key.module.scss';

interface IKeyProps {
  id: string;
  special?: boolean;
  equalSign?: boolean;
  wide?: boolean;
}

const Key: React.FC<IKeyProps> = ({ id, special, equalSign, wide }) => {
  const themeCtx = useContext(ThemeContext);
  const mathCtx = useContext(MathContext);

  const specialStyles = [
    classes.special,
    classes[`special-${themeCtx.theme}`],
  ].join(' ');
  const equalSignStyles = [
    classes['equal-sign'],
    classes[`equal-sign-${themeCtx.theme}`],
  ].join(' ');

  const styles = [
    classes.key,
    classes[`regular-${themeCtx.theme}`],
    special ? specialStyles : '',
    equalSign ? equalSignStyles : '',
    wide ? classes.wide : '',
  ].join(' ');

  const performAction = (id: string) => {
    if (id === 'RESET') return mathCtx.resetResult();
    if (id === 'DEL') return mathCtx.deleteLastNumber();

    mathCtx.setResult(mathCtx.result + id);
  };

  return (
    <button className={styles} onClick={() => performAction(id)}>
      {id}
    </button>
  );
};

export default Key;
