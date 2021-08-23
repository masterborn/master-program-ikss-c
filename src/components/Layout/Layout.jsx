import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';git 

function Layout({ children, props }) {
  const navAndFooterData = props.content;

  return (
    <div>
      <Navbar navAndFooterData={navAndFooterData} />
      <main>{children}</main>
      <Footer navAndFooterData={navAndFooterData} />
    </div>
  );
}

export default Layout;
