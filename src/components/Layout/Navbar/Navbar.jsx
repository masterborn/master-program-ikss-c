import React from 'react';
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
  & .wrapper {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1440px;
    padding-left: 124px;
  }
`;

function Navbar({ pathname }) {
  return (
    <StyledNav>
      <div className="wrapper">
        <LogoIkssFrame />
        <NavigationMenu pathname={pathname} />
        <SocialButtons size="12px" body="24px" />
      </div>
    </StyledNav>
  );
}

export default Navbar;
