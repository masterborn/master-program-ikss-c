import React from 'react';
import styled from 'styled-components';
import { color } from '@root/styles/GlobalStyles';
import LogoIkss from '@root/components/logoIkss';


function Footer({ socialLinks, footerText, pageName}) {

  const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${color.blue};
    height: ${pageName === 'HomePage' ? '728px' : '404px'};
    width: 100%;
    & p {
      color: ${color.white}
    }
  `;

  return (
    <StyledFooter>
      <ul>
        {socialLinks.map((link) => (
          <li key={link.fields.identifier}>
            <a href={link.fields.linkUrl}>{link.fields.identifier}</a>
          </li>
        ))}
      </ul>
      <LogoIkss />
      <p>{footerText?.fields.title}</p>
    </StyledFooter>
  );
}

export default Footer;
