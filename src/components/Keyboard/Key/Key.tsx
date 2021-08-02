import classes from './Key.module.scss';

interface IKeyProps {
  theme: string;
  id: number | string;
  special?: boolean;
  equalSign?: boolean;
  wide?: boolean;
}

const Key: React.FC<IKeyProps> = ({ theme, id, special, equalSign, wide }) => {
  console.log(theme);
  console.log(special);
  console.log(equalSign);

  const styles = [
    classes.key,
    classes[`regular-${theme}`],
    special ? classes[`special-${theme}`] : '',
    equalSign ? classes[`equal-sign-${theme}`] : '',
    wide ? classes.wide : '',
  ].join(' ');

  return <button className={styles}>{id}</button>;
};

export default Key;
