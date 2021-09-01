import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { color } from '@root/styles/GlobalStyles';

const StyledA = styled.a`
  color: ${(props) => (props.pathname === props.href ? color.navy : color.steel)};
`;

const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 413px;
  line-height: 20px;
  font-weight: 700;
  margin-left: 20px;
`;

function NavigationMenu({ pathname }) {
  return (
    <NavMenu>
      <Link href="/" passHref>
        <StyledA pathname={pathname}>Strona główna</StyledA>
      </Link>
      <Link href="/projekty" passHref>
        <StyledA pathname={pathname}>Projekty</StyledA>
      </Link>
      <Link href="/o-nas" passHref>
        <StyledA pathname={pathname}>O nas</StyledA>
      </Link>
      <Link href="/wspolpraca" passHref>
        <StyledA pathname={pathname}>Współpraca</StyledA>
      </Link>
    </NavMenu>
  );
}

export default NavigationMenu;
