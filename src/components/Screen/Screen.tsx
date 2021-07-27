import classes from './Screen.module.scss';

interface IScreenProps {
  theme: string;
}

const Screen: React.FC<IScreenProps> = ({ theme }) => {
  const styles = [classes.screen, classes[theme]].join(' ');

  return (
    <div className={styles}>
      <span>399,981</span>
    </div>
  );
};

export default Screen;
