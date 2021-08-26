import React from 'react';
import styled from 'styled-components';
import { color } from '@root/styles/GlobalStyles';
import LogoIkss from '@root/components/logoIkss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Footer({ socialLinks, footerText, pageName }) {
  const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: ${color.blue};
    width: 100%;
    & a,
    p {
      color: ${color.white};
      text-align: center;
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

  return (
    <StyledFooter style={{ height: `${pageName === 'HomePage' ? '728px' : '404px'}` }}>
      <ul>
        {socialLinks.map((link) => (
          <li key={link.fields.identifier}>
            <a href={link.fields.linkUrl}>{link.fields.linkCaption}</a>
          </li>
        ))}
      </ul>
      <LogoIkss />
      <p>
        {footerText?.fields.title}
        <p>
          Made with <FontAwesomeIcon icon={faHeart} /> by{' '}
          <a href="https://masterborn.com/" target="blank">
            MasterBorn Software
          </a>
        </p>
      </p>
    </StyledFooter>
  );
}

export default Footer;
