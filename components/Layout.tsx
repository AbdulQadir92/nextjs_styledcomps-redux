import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, toggleTheme }: any) => {
  return (
    <div id="app">
      <Navbar toggleTheme={toggleTheme} />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
