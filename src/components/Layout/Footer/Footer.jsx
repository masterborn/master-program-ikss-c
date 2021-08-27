import React from 'react';
import styled from 'styled-components';
import LogoIkss from '@root/components/logoIkss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { color } from '@root/styles/GlobalStyles';
import FacebookIcon from '@root/components/UI/Icons/FacebookIcon';
import InstagramIcon from '@root/components/UI/Icons/InstagramIcon';
import LinkedinIcon from '@root/components/UI/Icons/LinkedinIcon';
import YoutubeIcon from '@root/components/UI/Icons/YoutubeIcon';
import { useRouter } from 'next/dist/client/router';

function Footer({ socialLinks, footerText }) {
  const { pathName } = useRouter();

  const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    background-color: ${color.blue};
    width: 100%;
    height: ${pathName === '/' ? '728px' : '404px'};
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
      margin-bottom: 48px;
      padding: 0;
      display: flex;
      width: 185px;
      justify-content: space-between;
    }
    & .iconBody {
      font-size: 24px
    }
  `;

  const LogoConteinter = styled.a`
    margin-bottom: 56px;
    line-height: 0px;
  `;

  const addSocialIcon = (url) => {
    let icon;
    if (url.includes('facebook')) {
      icon = <FacebookIcon />;
    } else if (url.includes('instagram')) {
      icon = <InstagramIcon />;
    } else if (url.includes('lin')) {
      icon = <LinkedinIcon />;
    } else if (url.includes('youtu')) {
      icon = <YoutubeIcon />;
    }
    return icon;
  };

  return (
    <StyledFooter>
      <ul>
        {socialLinks?.reverse().map((link) => (
          <li key={link.fields.identifier}>
            <a href={link.fields.linkUrl} target="_self">
              {addSocialIcon(link.fields.linkUrl)}
            </a>
          </li>
        ))}
      </ul>
      <LogoConteinter href="/">
        <LogoIkss />
      </LogoConteinter>
      <p>
        {footerText?.fields.title}
        <br />
        Made with <FontAwesomeIcon icon={faHeart} /> by{' '}
        <a href="https://masterborn.com/">MasterBorn Software</a>
      </p>
    </StyledFooter>
  );
}

export default Footer;
