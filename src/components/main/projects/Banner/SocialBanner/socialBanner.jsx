import React from 'react';
import YoutubeCircleIcon from '@root/components/UI/Icons/YoutubeCircleIcon';
import InstagramCircleIcon from '@root/components/UI/Icons/InstagramCircleIcon';
import FacebookCircleIcon from '@root/components/UI/Icons/FacebookCircleIcon';
import LinkedinCircleIcon from '@root/components/UI/Icons/LinkedinCircleIcon';
import styled from 'styled-components';
import { steelTints } from '../../../../../styles/GlobalStyles';

const ICON_SIZE = '30px';
const BODY_SIZE = ' 55px';

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
  max-width: auto;
  margin: 0;
  padding: 0;
  role: button;
  z-index: 10;
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
`;

const H5 = styled.h5`
  margin-left: 15px;
`;
function SocialBanner({ yt, insta, lin, fb }) {
  const onClickHandler = (url) => {
    window.open(`${url}`, '_blank');
  };

  const keyDownHandler = () => {};

  return (
    <BannerDiv>
      <Div onClick={() => onClickHandler(yt)} onKeyPress={keyDownHandler} tabIndex={0}>
        <YoutubeCircleIcon size={ICON_SIZE} body={BODY_SIZE} />
        <H5>YouTube</H5>
      </Div>
      <Div onClick={() => onClickHandler(insta)} onKeyPress={keyDownHandler} tabIndex={0}>
        <InstagramCircleIcon size={ICON_SIZE} body={BODY_SIZE} />
        <H5>Instagram</H5>
      </Div>
      <Div onClick={() => onClickHandler(fb)} onKeyPress={keyDownHandler} tabIndex={0}>
        <FacebookCircleIcon size={ICON_SIZE} body={BODY_SIZE} />
        <H5>Facebook</H5>
      </Div>
      <Div onClick={() => onClickHandler(lin)} onKeyPress={keyDownHandler} tabIndex={-1}>
        <LinkedinCircleIcon size={ICON_SIZE} body={BODY_SIZE} />
        <H5>LinkedIn</H5>
      </Div>
    </BannerDiv>
  );
}

export default SocialBanner;
