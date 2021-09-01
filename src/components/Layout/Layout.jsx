import { useRouter } from 'next/dist/client/router';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

function Layout({ children, props }) {
  const socialLinks = props.content
    ?.filter((position) => position.fields.linkUrl !== undefined)
    .reverse();
  const footerText = props.content?.find(
    (position) => position.fields.identifier === 'footer-text',
  );

  const { pathname } = useRouter();

  return (
    <>
      {pathname !== '/404' && <Navbar socialLinks={socialLinks} pathname={pathname} />}
      <main>{children}</main>
      {pathname !== '/404' && (
        <Footer socialLinks={socialLinks} footerText={footerText} pathname={pathname} />
      )}
    </>
  );
}

export default Layout;
