import Link from 'next/link';
import React from 'react';
import styled, { css } from 'styled-components';
import { color } from '@root/styles/GlobalStyles';

const StyledA = styled.a`
  padding: ${(props) => (props.hamburger ? '24px' : '0')};
  color: ${(props) => (props.pathname === props.href ? color.navy : color.steel)};
  box-shadow: ${(props) =>
    props.hamburger ? 'inset 0px 1.5px 0px #EAF5FF, inset 0px 0px 0px #EAF5FF; ' : 'none'};
  width: ${(props) => (props.hamburger ? '100%' : 'auto')};
  text-align: left;
  &:last-child {
    box-shadow: ${(props) =>
      props.hamburger ? 'inset 0px 1.5px 0px #EAF5FF, inset 0px -1.5px 0px #EAF5FF; ' : 'none'};
  }
`;

const hamburgerMenu = css`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-left: 0px;
`;
const navbarMenu = css`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 413px;
  margin-left: 20px;
`;

const NavMenu = styled.div`
  display: flex;
  line-height: 20px;
  font-weight: 700;
  ${({ hamburger }) => (hamburger ? hamburgerMenu : navbarMenu)}
`;

function NavigationMenu({ pathname, hamburger, handleMenuOpen }) {
  const clearStorage = () => {
    window.localStorage.clear();
  };

  const handleClick = () => {
    clearStorage();
    handleMenuOpen();
  };

  return (
    <NavMenu hamburger={hamburger}>
      <Link href="/" passHref>
        <StyledA onClick={() => handleClick()} hamburger={hamburger} pathname={pathname}>
          Strona główna
        </StyledA>
      </Link>
      <Link href="/projekty" passHref>
        <StyledA pathname={pathname} hamburger={hamburger} onClick={() => handleClick()}>
          Projekty
        </StyledA>
      </Link>
      <Link href="/o-nas" passHref>
        <StyledA hamburger={hamburger} pathname={pathname} onClick={() => handleClick()}>
          O nas
        </StyledA>
      </Link>
      <Link href="/wspolpraca" passHref>
        <StyledA hamburger={hamburger} pathname={pathname} onClick={() => handleClick()}>
          Współpraca
        </StyledA>
      </Link>
    </NavMenu>
  );
}

export default NavigationMenu;
