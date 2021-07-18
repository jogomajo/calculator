import classes from './Key.module.scss';

interface IKeyProps {
  id: number | string;
  gray?: boolean;
  red?: boolean;
  wide?: boolean;
}

const Key: React.FC<IKeyProps> = ({ id, gray, red, wide }) => {
  const styles = [
    classes.key,
    gray ? classes.gray : '',
    red ? classes.red : '',
    wide ? classes.wide : '',
  ].join(' ');

  return <button className={styles}>{id}</button>;
};

export default Key;
