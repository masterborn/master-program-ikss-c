import React, { useEffect, useState, useContext } from 'react';
import { PrimaryButton } from '@root/components/UI/Button/Button';
import { useRouter } from 'next/dist/client/router';
import { ModalContext } from '@root/contextProviders/modalContext';
import Modal from '@root/components/UI/Modal/modal';
import styled from 'styled-components';
import LogoIkssFrame from '@root/components/logoIkssFrame';
import SocialButtons from './SocialButtons';
import NavigationMenu from './NavigationMenu';
import HamburgerMenu from './HamburgerMenu';

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 88px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 4px 16px rgba(97, 121, 139, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 20px;
`;

const LogoButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;
const StaticWidth = styled.div`
  width: 325px;
`;

function Navbar({ socialLinks, pathname }) {
  const [isVisible, setIsVisible] = useState(false);
  const [browserWindow, setBrowserWindow] = useState({});
  const [mobileView, setMobileView] = useState(false);
  const router = useRouter();
  const { onOpenModal } = useContext(ModalContext);

  const showAfterScroll = () => {
    const heightToShowFrom = 550;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToShowFrom) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.onresize = () => {
      if (window.innerWidth < 860) {
        setMobileView(true);
      } else setMobileView(false);
    };

    setBrowserWindow(window);
    window.addEventListener('scroll', showAfterScroll);
    return () => window.removeEventListener('scroll', showAfterScroll);
  }, []);

  const handleLogoClick = () => {
    if (pathname === '/') {
      browserWindow.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      router.push('/');
    }
  };
  const openContactForm = () => {
    if (router.pathname === '/') {
      browserWindow.scrollTo({
        top: 3900,
        behavior: 'smooth',
      });
    } else {
      onOpenModal();
    }
  };
  return (
    <StyledNav>
      <Wrapper>
        <LogoButton onClick={handleLogoClick}>
          <LogoIkssFrame />
        </LogoButton>
        {!mobileView && <NavigationMenu pathname={pathname} />}
        <StaticWidth>
          {isVisible && <SocialButtons socialLinks={socialLinks} size="12px" body="24px" />}
        </StaticWidth>
        {!mobileView && (
          <PrimaryButton size="small" onClick={openContactForm}>
            Skontaktuj się
          </PrimaryButton>
        )}
      </Wrapper>
      {mobileView && <HamburgerMenu socialLinks={socialLinks} pathname={pathname} />}
      <Modal />
    </StyledNav>
  );
}

export default Navbar;
