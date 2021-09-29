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
  @media (max-width: 550px) {
    height: 56px;
  }
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
  @media (max-width: 550px) {
    & svg {
      height: 35px;
    }
  }
`;

function Navbar({ socialLinks, pathname }) {
  const [isVisible, setIsVisible] = useState(false);
  const [browserWindow, setBrowserWindow] = useState({});
  const [mobileView, setMobileView] = useState(false);
  const router = useRouter();
  const { onOpenModal } = useContext(ModalContext);

  const showAfterScroll = () => {
    let heightToShowFrom;
    if (router.pathname === '/') {
      heightToShowFrom = 550;
    } else {
      heightToShowFrom = 0;
    }
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToShowFrom) {
      setIsVisible(true);
    } else if (router.pathname === '/') {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    if (router.pathname !== '/') {
      setIsVisible(true);
    } else setIsVisible(false);

    window.onload = () => {
      if (window.innerWidth < 910) {
        setMobileView(true);
      } else setMobileView(false);
    };
    window.onresize = () => {
      if (window.innerWidth < 910) {
        setMobileView(true);
      } else setMobileView(false);
    };

    setBrowserWindow(window);
    window.addEventListener('scroll', showAfterScroll);
    return () => window.removeEventListener('scroll', showAfterScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname]);

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
    if (pathname === '/') {
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
        {!mobileView && (
          <>
            <NavigationMenu pathname={pathname} />
            <SocialButtons
              isVisible={isVisible}
              socialLinks={socialLinks}
              size="12px"
              body="24px"
            />
            <PrimaryButton size="small" onClick={() => openContactForm()}>
              Skontaktuj się
            </PrimaryButton>
          </>
        )}
      </Wrapper>
      {mobileView && <HamburgerMenu socialLinks={socialLinks} pathname={pathname} />}
      <Modal />
    </StyledNav>
  );
}

export default Navbar;
