import classes from './Layout.module.scss';

interface ILayoutProps {
  theme: string;
}

const Layout: React.FC<ILayoutProps> = ({ children, theme }) => {
  const styles = [classes.layout, classes[theme]].join(' ');

  return <div className={styles}>{children}</div>;
};

export default Layout;
