import React from 'react';
import styled from 'styled-components';
import LogoIkss from '@root/components/logoIkss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { color } from '@root/styles/GlobalStyles';

function Footer({ socialLinks, footerText, pageName }) {
  const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    background-color: ${color.blue};
    width: 100%;
    padding: 0 0 56px 0;
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
      margin: 0;
      padding: 0;
      display: flex;
      width: 300px;
      justify-content: space-between;
    }
  `;
  const LogoConteinter = styled.div`
    margin-bottom: 56px;
    line-height:0px  `;

  return (
    <StyledFooter style={{ height: `${pageName === 'HomePage' ? '728px' : '404px'}` }}>
      <ul>
        {socialLinks?.map((link) => (
          <li key={link.fields.identifier}>
            <a href={link.fields.linkUrl}>{link.fields.linkCaption}</a>
          </li>
        ))}
      </ul>
      <LogoConteinter>
        <LogoIkss />
      </LogoConteinter>
      <p>
        {footerText?.fields.title}
        <p>
          Made with <FontAwesomeIcon icon={faHeart} /> by{' '}
          <a href="https://masterborn.com/">MasterBorn Software</a>
        </p>
      </p>
    </StyledFooter>
  );
}

export default Footer;
