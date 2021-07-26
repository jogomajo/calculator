import { ChangeEvent, useState } from 'react';

import classes from './ThemeSwitcher.module.scss';

const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState('');

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTheme(event.target.value);
  };

  console.log(theme);

  return (
    <div className={classes.theme}>
      <span>THEME</span>
      <div className={classes.switcher} onChange={onChangeHandler}>
        <label className={classes.option}>
          1
          <input type="radio" name="radio" value="one" defaultChecked />
          <span className={classes.checkmark}></span>
        </label>
        <label className={classes.option}>
          2
          <input type="radio" name="radio" value="two" />
          <span className={classes.checkmark}></span>
        </label>
        <label className={classes.option}>
          3
          <input type="radio" name="radio" value="three" />
          <span className={classes.checkmark}></span>
        </label>
      </div>

      {/* <div className={classes.radio} onChange={onChangeHandler}>
        <label htmlFor="first">1</label>
        <input
          type="radio"
          id="first"
          value="first"
          name="theme"
          defaultChecked
        />
        <label htmlFor="second">2</label>
        <input type="radio" id="second" value="second" name="theme" />
        <label htmlFor="third">3</label>
        <input type="radio" id="third" value="third" name="theme" />
      </div> */}
    </div>
  );
};

export default ThemeSwitcher;
