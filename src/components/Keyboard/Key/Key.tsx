import { useContext } from 'react';

import ThemeContext from '../../../store/theme-context';

import classes from './Key.module.scss';

interface IKeyProps {
  id: number | string;
  special?: boolean;
  equalSign?: boolean;
  wide?: boolean;
}

const Key: React.FC<IKeyProps> = ({ id, special, equalSign, wide }) => {
  const themeCtx = useContext(ThemeContext);

  const styles = [
    classes.key,
    classes[`regular-${themeCtx.theme}`],
    special ? classes[`special-${themeCtx.theme}`] : '',
    equalSign ? classes[`equal-sign-${themeCtx.theme}`] : '',
    wide ? classes.wide : '',
  ].join(' ');

  return <button className={styles}>{id}</button>;
};

export default Key;
