import React from 'react';
import styled from 'styled-components';
import YoutubeCircleIcon from '../../../../YoutubeCircleIcon';
import InstagramCircleIcon from '../../../../InstagramCircleIcon';
import FacebookCircleIcon from '../../../../FacebookCircleIcon';
import LinkedinCircleIcon from '../../../../LinkedinCircleIcon';
import { steelTints } from '../../../../../styles/GlobalStyles';

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
`;

const BannerDiv = styled.div`
  width: 1300px !important;
  height: 137px;
  float: right;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  box-shadow: 13px 15px 22px ${steelTints.steel_20};
`;
function SocialBanner({ yt, insta, lin, fb }) {
  const onClickHandler = (url) => {
    window.open(`${url}`, '_blank');
  };
  const keyDownHandler = () => {};
  return (
    <BannerDiv>
      <Div onClick={() => onClickHandler(yt)} onKeyPress={keyDownHandler} tabIndex={0}>
        <YoutubeCircleIcon size="20px" />
        <h5>YouTube</h5>
      </Div>
      <Div onClick={() => onClickHandler(insta)} onKeyPress={keyDownHandler} tabIndex={0}>
        <InstagramCircleIcon size="20px" />
        <h5>Instagram</h5>
      </Div>
      <Div onClick={() => onClickHandler(fb)} onKeyPress={keyDownHandler} tabIndex={0}>
        <FacebookCircleIcon size="20px" />
        <h5>Facebook</h5>
      </Div>
      <Div onClick={() => onClickHandler(lin)} onKeyPress={keyDownHandler} tabIndex={-1}>
        <LinkedinCircleIcon size="20px" />
        <h5>LinkedIn</h5>
      </Div>
    </BannerDiv>
  );
}

export default SocialBanner;
