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
  padding: 0 0 56px 0;
  & .wrapper {
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
    & ul {
      list-style-type: none;
      margin-bottom: 48px;
      padding: 0;
      display: flex;
      width: 185px;
      justify-content: space-between;
    }
    & .iconBody {
      font-size: 24px;
    }
    & .links-container {
      display: flex;
      justify-content: space-between;
      width: 413px;
      margin-bottom: 50px;
      & a {
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 0em;
      }
    }
    & .upBtn {
      position: absolute;
      top: -30px;
    }
    & .ScrollUpButtonBody {
      position: absolute;
      margin-right: 20px;
      top: -32px;
      right: 0;
      background-color: #fff;
      font-size: 22px;
      border: none;
      cursor: pointer;
    }
  }
`;

const LogoContainer = styled.a`
  margin-bottom: 56px;
  line-height: 0px;
`;

function Footer({ socialLinks, footerText, pathname }) {
  return (
    <StyledFooter pathname={pathname}>
      <wrapper className="wrapper">
        gi
        <ScrollUpButton />
        <div className="links-container">
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
        </div>
        <ul>
          {socialLinks?.reverse().map((link) => (
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
      </wrapper>
    </StyledFooter>
  );
}

export default Footer;
