import CalcLayout from './components/Layout/CalcLayout';
import Keyboard from './components/Keyboard/Keyboard';
import Screen from './components/Screen/Screen';
import TopBar from './components/TopBar/TopBar';

const App: React.FC = () => {
  return (
    <CalcLayout>
      <TopBar />
      <Screen />
      <Keyboard />
    </CalcLayout>
  );
};

export default App;
