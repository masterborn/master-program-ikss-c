import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar'; 

function Layout({ children, props }) {
  const navAndFooterData = props.content;
  const socialLinks = navAndFooterData?.filter((position) => position.fields.linkUrl !== undefined);
  // console.log('navbar', navAndFooterData);
  const footerText = navAndFooterData.find(
    (position) => position.fields.identifier === 'footer-text',
  );

  return (
    <div>
      <Navbar socialLinks={socialLinks} />
      <main>{children}</main>
      <Footer socialLinks={socialLinks} footerText={footerText}/>
    </div>
  );
}

export default Layout;
