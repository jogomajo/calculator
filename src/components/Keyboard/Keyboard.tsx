import Key from './Key/Key';

import classes from './Keyboard.module.scss';

interface IKeyboardProps {
  theme: string;
}

const Keyboard: React.FC<IKeyboardProps> = ({ theme }) => {
  const styles = [classes.keyboard, classes[theme]].join(' ');

  return (
    <div className={styles}>
      <Key id={7} theme={theme} />
      <Key id={8} theme={theme} />
      <Key id={9} theme={theme} />
      <Key id="DEL" theme={theme} special />
      <Key id={4} theme={theme} />
      <Key id={5} theme={theme} />
      <Key id={6} theme={theme} />
      <Key id="+" theme={theme} />
      <Key id={1} theme={theme} />
      <Key id={2} theme={theme} />
      <Key id={3} theme={theme} />
      <Key id="-" theme={theme} />
      <Key id="." theme={theme} />
      <Key id={0} theme={theme} />
      <Key id="/" theme={theme} />
      <Key id="x" theme={theme} />
      <Key id="RESET" theme={theme} special wide />
      <Key id="=" theme={theme} equalSign wide />
    </div>
  );
};

export default Keyboard;
