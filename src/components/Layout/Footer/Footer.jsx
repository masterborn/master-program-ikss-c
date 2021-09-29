import React from 'react';
import styled from 'styled-components';
import LogoIkss from '@root/components/logoIkss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { color } from '@root/styles/GlobalStyles';
import ScrollUpButton from '@root/components/UI/Icons/ScrollUpButton';
import Link from 'next/link';
import SocialLink from './SocialLink';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background-color: ${color.blue};
  width: 100vw;
  height: ${(props) => (props.pathname === '/' ? '728px' : '404px')};
  padding: 0 0 51px 0;
  @media (max-width: 550px) {
    height: ${(props) => (props.pathname === '/' ? '726px' : '507px')};
    padding: 0 0 40px 0;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
  max-width: 1440px;
  position: relative;
  & a,
  p {
    color: ${color.white};
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: -0.015em;
  }
  & li > a {
    font-size: 20px;
  }
  & li {
    line-height: 20px;
    height: 20px;
  }
  & ul {
    height: 20px;
    list-style-type: none;
    line-height: 20px;
    margin-bottom: 46px;
    padding: 0;
    display: flex;
    width: 185px;
    justify-content: space-between;
  }
  & .ScrollUpButtonBody {
    color: ${(props) => props.theme.color.blue};
    position: absolute;
    top: -32px;
    right: 128px;
    background-color: #fff;
    font-size: 22px;
    border: none;
    cursor: pointer;
    @media (max-width: 1250px) {
      right: 2%;
    }
    @media (max-width: 990px) {
      top: ${(props) => (props.pathname === '/' ? '220px' : '-20px')};
      right: 50%;
      transform: translate(50%, 0);
    }
    @media (max-width: 550px) {
      top: ${(props) => (props.pathname === '/' ? '196px' : '-20px')};
      right: 50%;
      transform: translate(50%, 0);
      height: 40px;
      width: 40px;
    }
  }
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 413px;
  height: 22px;
  margin-bottom: 48px;
  & a {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
  }
  @media (max-width: 550px) {
    flex-direction: column;
    margin-bottom: 16px;
    height: auto;
  }
  & a {
    margin-bottom: 24px;
  }
`;

const LogoContainer = styled.a`
  margin-bottom: 54px;
  line-height: 0px;
  @media (max-width: 550px) {
    margin-bottom: 40px;
    & svg {
      height: 38px;
    }
  }
`;

function Footer({ socialLinks, footerText, pathname }) {
  return (
    <StyledFooter pathname={pathname}>
      <Wrapper pathname={pathname}>
        <ScrollUpButton pathname={pathname} />
        <LinksContainer>
          <Link href="/">
            <a>Strona główna</a>
          </Link>
          <Link href="/projekty">
            <a>Projekty</a>
          </Link>
          <Link href="/o-nas">
            <a>O nas</a>
          </Link>
          <Link href="/wspolpraca">
            <a>Współpraca</a>
          </Link>
        </LinksContainer>
        <ul>
          {socialLinks?.map((link) => (
            <li key={link.fields.identifier}>
              <SocialLink socialUrl={link.fields.linkUrl} />
            </li>
          ))}
        </ul>
        <LogoContainer href="/">
          <LogoIkss />
        </LogoContainer>
        <p>
          {footerText?.fields.title}
          <br />
          Made with <FontAwesomeIcon icon={faHeart} /> by{' '}
          <a href="https://masterborn.com/">MasterBorn Software</a>
        </p>
      </Wrapper>
    </StyledFooter>
  );
}

export default Footer;
