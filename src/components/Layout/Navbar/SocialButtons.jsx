import React from 'react';
import InstagramCircleIcon from '@root/components/UI/Icons/InstagramCircleIcon';
import FacebookCircleIcon from '@root/components/UI/Icons/FacebookCircleIcon';
import YoutubeCircleIcon from '@root/components/UI/Icons/YoutubeCircleIcon';
import LinkedinCircleIcon from '@root/components/UI/Icons/LinkedinCircleIcon';
import styled from 'styled-components';

const SocialBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 168px;
  color: ${(props) => props.theme.color.blue};
  margin-left: ${(props) => (props.hamburger ? '0' : '135px')};
  margin-right: ${(props) => (props.hamburger ? '0' : '20px')};
  align-self: ${(props) => (props.hamburger ? 'center' : 'none')};
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  @media (max-width: 1250px) {
    margin-left: ${(props) => (props.hamburger ? '0' : '40px')};
  }
  @media (max-width: 910px) {
    visibility: ${(props) => (props.hamburger ? 'visible' : 'hidden')};
  }
`;

const addSocialIcon = (url, size, body) => {
  let icon;
  if (url.includes('facebook')) {
    icon = <FacebookCircleIcon size={size} body={body} />;
  } else if (url.includes('instagram')) {
    icon = <InstagramCircleIcon size={size} body={body} />;
  } else if (url.includes('lin')) {
    icon = <LinkedinCircleIcon size={size} body={body} />;
  } else if (url.includes('youtu')) {
    icon = <YoutubeCircleIcon size={size} body={body} />;
  }
  return icon;
};

function SocialButtons({ socialLinks, size, body, hamburger, isVisible }) {
  return (
    <SocialBar isVisible={isVisible} hamburger={hamburger}>
      {socialLinks?.map((link) => (
        <div key={`${link.fields.identifier}+${Math.random()}`}>
          <a href={link.fields.linkUrl}>{addSocialIcon(link.fields.linkUrl, size, body)}</a>
        </div>
      ))}
    </SocialBar>
  );
}

export default SocialButtons;
