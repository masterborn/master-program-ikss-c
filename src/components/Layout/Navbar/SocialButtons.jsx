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

function SocialButtons({ socialLinks, size, body }) {
  return (
    <SocialBar>
      {socialLinks?.reverse().map((link) => (
        <div key={link.fields.identifier}>
          <a href={link.fields.linkUrl}>{addSocialIcon(link.fields.linkUrl, size, body)}</a>
        </div>
      ))}
    </SocialBar>
  );
}

export default SocialButtons;
