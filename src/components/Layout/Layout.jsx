// import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

function Layout({ children, props }) {
  // const socialLinks = props.content?.filter((position) => position.fields.linkUrl !== undefined);
  // const footerText = props.content?.find(
  //   (position) => position.fields.identifier === 'footer-text',
  // );
  // const pageName = { props };

  return (
    <>
      <Navbar socialLinks={socialLinks} />
      <main>{children}</main>
      {/* <Footer socialLinks={socialLinks} footerText={footerText} pageName={pageName} /> */}
    </>
  );
}

export default Layout;
