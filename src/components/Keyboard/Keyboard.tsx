import Key from './Key/Key';

import classes from './Keyboard.module.scss';

const Keyboard: React.FC = () => {
  return (
    <div className={classes.keyboard}>
      <Key id={7} />
      <Key id={8} />
      <Key id={9} />
      <Key id="DEL" gray />
      <Key id={4} />
      <Key id={5} />
      <Key id={6} />
      <Key id="+" />
      <Key id={1} />
      <Key id={2} />
      <Key id={3} />
      <Key id="-" />
      <Key id="." />
      <Key id={0} />
      <Key id="/" />
      <Key id="x" />
      <Key id="RESET" gray wide />
      <Key id="=" red wide />
    </div>
  );
};

export default Keyboard;
