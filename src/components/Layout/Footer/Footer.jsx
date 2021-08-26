import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: lightblue;
  width: 100%;
  position: fixed;
  bottom: 0;
`;

function Footer({ socialLinks, footerText }) {


  return (
    <StyledFooter>
      <h3>Hello Footer</h3>
      <ul>
        {socialLinks.map((link) => (
          <li key={link.fields.identifier}>
            <a href={link.fields.linkUrl}>{link.fields.identifier}</a>
          </li>
        ))}
      </ul>
      <p>{footerText?.fields.title}</p>
    </StyledFooter>
  );
}

export default Footer;
