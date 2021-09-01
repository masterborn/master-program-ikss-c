import { useRouter } from 'next/dist/client/router';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

function Layout({ children, props }) {
  const reversedSocialLinks = props.content
    ?.filter((position) => position.fields.linkUrl !== undefined)
    .reverse();
  const footerText = props.content?.find(
    (position) => position.fields.identifier === 'footer-text',
  );

  const { pathname } = useRouter();

  return (
    <>
      {pathname !== '/404' && (
        <Navbar reversedSocialLinks={reversedSocialLinks} pathname={pathname} />
      )}
      <main>{children}</main>
      {pathname !== '/404' && (
        <Footer
          reversedSocialLinks={reversedSocialLinks}
          footerText={footerText}
          pathname={pathname}
        />
      )}
    </>
  );
}

export default Layout;
