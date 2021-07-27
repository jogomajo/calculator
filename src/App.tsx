import { useState, ChangeEvent } from 'react';

import Layout from './components/Layout/Layout';
import Calculator from './components/Calculator/Calculator';
import Keyboard from './components/Keyboard/Keyboard';
import Screen from './components/Screen/Screen';
import TopBar from './components/TopBar/TopBar';

const App: React.FC = () => {
  const [theme, setTheme] = useState('one');

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTheme(event.target.value);
  };

  return (
    <Layout theme={theme}>
      <Calculator>
        <TopBar theme={theme} onChangeHandler={onChangeHandler} />
        <Screen theme={theme} />
        <Keyboard />
      </Calculator>
    </Layout>
  );
};

export default App;
