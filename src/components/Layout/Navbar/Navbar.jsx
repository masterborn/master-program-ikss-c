import React, { useEffect, useState } from 'react';
import { PrimaryButton } from '@root/components/UI/Button/Button';
import { useRouter } from 'next/dist/client/router';
import styled from 'styled-components';
import LogoIkssFrame from '@root/components/logoIkssFrame';
import SocialButtons from './SocialButtons';
import NavigationMenu from './NavigationMenu';

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 88px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 4px 16px rgba(97, 121, 139, 0.1);
  position: fixed;
  top: 0;
  z-index: 100;
  & .wrapper {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1440px;
    padding-left: 124px;
    padding-right: 120px;
  }
`;
const LogoButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

function Navbar({ reversedSocialLinks, pathname }) {
  const [isVisible, setIsVisible] = useState(false);
  const [browserWindow, setBrowserWindow] = useState({});
  const router = useRouter();

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

  return (
    <StyledNav>
      <div className="wrapper">
        <LogoButton onClick={handleLogoClick}>
          <LogoIkssFrame />
        </LogoButton>

        <NavigationMenu pathname={pathname} />
        {isVisible && (
          <SocialButtons reversedSocialLinks={reversedSocialLinks} size="12px" body="24px" />
        )}
        <PrimaryButton size="small">Skontaktuj się</PrimaryButton>
      </div>
    </StyledNav>
  );
}

export default Navbar;
