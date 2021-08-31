import React from 'react';
import styled from 'styled-components';
import LogoIkssFrame from '@root/components/logoIkssFrame';
import Link from 'next/link';
import { color } from '@root/styles/GlobalStyles';

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
  & .navigation-menu {
    display: flex;
    justify-content: space-between;
    width: 413px;
    line-height: 20px;
    font-weight: 700;
  }
`;

const StyledLink = styled.a`
  color: ${(props) => (props.pathname === props.href ? color.navy : color.steel)};
`;

function Navbar({ pathname }) {
  return (
    <StyledNav>
      <div className="wrapper">
        <LogoIkssFrame />
        <div className="navigation-menu">
          <Link href="/">
            <StyledLink pathname={pathname} href="/">
              Strona główna
            </StyledLink>
          </Link>
          <Link href="/projekty">
            <StyledLink pathname={pathname} href="/projekty">
              Projekty
            </StyledLink>
          </Link>
          <Link href="/o-nas">
            <StyledLink pathname={pathname} href="/o-nas">
              O nas
            </StyledLink>
          </Link>
          <Link href="/wspolpraca">
            <StyledLink pathname={pathname} href="/wspolpraca">
              Współpraca
            </StyledLink>
          </Link>
        </div>
      </div>
    </StyledNav>
  );
}

export default Navbar;
