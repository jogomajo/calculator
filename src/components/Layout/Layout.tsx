import { useContext } from 'react';

import ThemeContext from '../../store/theme-context';

import classes from './Layout.module.scss';

const Layout: React.FC = ({ children }) => {
  const themeCtx = useContext(ThemeContext);

  const styles = [classes.layout, classes[themeCtx.theme]].join(' ');

  return <div className={styles}>{children}</div>;
};

export default Layout;
