import React, { useEffect, useState } from 'react';
import { PrimaryButton } from '@root/components/UI/Button/Button';
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

function Navbar({ socialLinks, pathname }) {
  const [isVisible, setIsVisible] = useState(false);

  const showAfterScroll = () => {
    const heightToShowFrom = 600;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToShowFrom) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', showAfterScroll);
    return () => window.removeEventListener('scroll', showAfterScroll);
  }, []);

  return (
    <StyledNav>
      <div className="wrapper">
        <LogoIkssFrame />
        <NavigationMenu pathname={pathname} />
        {isVisible && <SocialButtons socialLinks={socialLinks} size="12px" body="24px" />}
        <PrimaryButton size="small">Skontaktuj się</PrimaryButton>
      </div>
    </StyledNav>
  );
}

export default Navbar;
