// import Footer from './Footer/Footer';
<<<<<<< HEAD
// import Navbar from './Navbar/Navbar';
=======
import Navbar from './Navbar/Navbar'; 
>>>>>>> origin/IC-30-Values

function Layout({ children }) {
  // const socialLinks = props.content?.filter((position) => position.fields.linkUrl !== undefined);
  // const footerText = props.content?.find(
  //   (position) => position.fields.identifier === 'footer-text',
  // );
  // const pageName = { props };

  return (
    <>
      {/* <Navbar socialLinks={socialLinks} /> */}
      <main>{children}</main>
<<<<<<< HEAD
      {/* <Footer socialLinks={socialLinks} footerText={footerText} pageName={pageName} /> */}
    </>
=======
      {/* <Footer navAndFooterData={navAndFooterData} /> */}
    </div>
>>>>>>> origin/IC-30-Values
  );
}

export default Layout;
