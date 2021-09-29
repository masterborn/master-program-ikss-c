import React from 'react';
import YoutubeCircleIcon from '@root/components/UI/Icons/YoutubeCircleIcon';
import InstagramCircleIcon from '@root/components/UI/Icons/InstagramCircleIcon';
import FacebookCircleIcon from '@root/components/UI/Icons/FacebookCircleIcon';
import LinkedinCircleIcon from '@root/components/UI/Icons/LinkedinCircleIcon';
import styled from 'styled-components';
import { steelTints } from '../../../../../styles/GlobalStyles';

const ICON_SIZE = '24px';
const CIRCLE_SIZE = '48px';

const StyledAnchor = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
  max-width: auto;
  margin: 0;
  padding: 0;
  z-index: 10;
  color: ${(props) => props.theme.color.blue};
`;

const BannerDiv = styled.div`
  width: 65%;
  height: 137px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  box-shadow: 13px 15px 22px ${steelTints.steel_20};
  margin-top: -10px;
  @media (max-width: 1150px) {
    width: 100%;
    margin: 0 24px 0;
    border-radius: 20px;
    height: 80px;
  }
`;

const H5 = styled.h5`
  margin-left: 15px;
  @media (max-width: 750px) {
    display: none;
  }
`;
function SocialBanner({ yt, insta, lin, fb }) {
  const keyDownHandler = () => {};

  return (
    <BannerDiv>
      <StyledAnchor onKeyPress={keyDownHandler} tabIndex={0} href={fb} target="_blank">
        <FacebookCircleIcon size={ICON_SIZE} body={CIRCLE_SIZE} />
        <H5>Facebook</H5>
      </StyledAnchor>
      <StyledAnchor onKeyPress={keyDownHandler} tabIndex={0} href={insta} target="_blank">
        <InstagramCircleIcon size={ICON_SIZE} body={CIRCLE_SIZE} />
        <H5>Instagram</H5>
      </StyledAnchor>
      <StyledAnchor onKeyPress={keyDownHandler} tabIndex={0} href={yt} target="_blank">
        <YoutubeCircleIcon size={ICON_SIZE} body={CIRCLE_SIZE} />
        <H5>YouTube</H5>
      </StyledAnchor>
      <StyledAnchor onKeyPress={keyDownHandler} tabIndex={0} href={lin} target="_blank">
        <LinkedinCircleIcon size={ICON_SIZE} body={CIRCLE_SIZE} />
        <H5>LinkedIn</H5>
      </StyledAnchor>
    </BannerDiv>
  );
}

export default SocialBanner;
