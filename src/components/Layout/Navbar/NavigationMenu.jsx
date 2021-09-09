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
      <Link href="/">
        <StyledA pathname={pathname} href="/">
          Strona główna
        </StyledA>
      </Link>
      <Link href="/projects">
        <StyledA pathname={pathname} href="/projekty">
          Projekty
        </StyledA>
      </Link>
      <Link href="/o-nas">
        <StyledA pathname={pathname} href="/o-nas">
          O nas
        </StyledA>
      </Link>
      <Link href="/wspolpraca">
        <StyledA pathname={pathname} href="/wspolpraca">
          Współpraca
        </StyledA>
      </Link>
    </NavMenu>
  );
}

export default NavigationMenu;
