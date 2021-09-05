import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
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

const NavMenu = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.hamburger ? 'column' : 'row')};
  justify-content: ${(props) => (props.hamburger ? 'flex-start' : 'space-between')};
  align-items: ${(props) => (props.hamburger ? 'flex-start' : 'center')};
  width: ${(props) => (props.hamburger ? '100%' : '413px')};
  line-height: 20px;
  font-weight: 700;
  margin-left: ${(props) => (props.hamburger ? '0px' : '20px')};
  @media (max-width: 860px) {
    display: ${(props) => (props.hamburger ? 'flex' : 'none')};
  }
`;

function NavigationMenu({ pathname, hamburger }) {
  return (
    <NavMenu hamburger={hamburger}>
      <Link href="/" passHref>
        <StyledA hamburger={hamburger} pathname={pathname}>
          Strona główna
        </StyledA>
      </Link>
      <Link href="/projekty" passHref>
        <StyledA hamburger={hamburger} pathname={pathname}>
          Projekty
        </StyledA>
      </Link>
      <Link href="/o-nas" passHref>
        <StyledA hamburger={hamburger} pathname={pathname}>
          O nas
        </StyledA>
      </Link>
      <Link href="/wspolpraca" passHref>
        <StyledA hamburger={hamburger} pathname={pathname}>
          Współpraca
        </StyledA>
      </Link>
    </NavMenu>
  );
}

export default NavigationMenu;
