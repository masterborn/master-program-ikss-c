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

function SocialButtons({ size, body }) {
  return (
    <SocialBar>
      <InstagramCircleIcon size={size} body={body} />
      <FacebookCircleIcon size={size} body={body} />
      <YoutubeCircleIcon size={size} body={body} />
      <LinkedinCircleIcon size={size} body={body} />
    </SocialBar>
  );
}

export default SocialButtons;
