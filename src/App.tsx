import { ThemeContextProvider } from './store/theme-context';
import { MathContextProvider } from './store/math-context';
import Layout from './components/Layout/Layout';
import Calculator from './components/Calculator/Calculator';
import Keyboard from './components/Keyboard/Keyboard';
import Screen from './components/Screen/Screen';
import TopBar from './components/TopBar/TopBar';

const App: React.FC = () => {
  return (
    <ThemeContextProvider>
      <Layout>
        <MathContextProvider>
          <Calculator>
            <TopBar />
            <Screen />
            <Keyboard />
          </Calculator>
        </MathContextProvider>
      </Layout>
    </ThemeContextProvider>
  );
};

export default App;
