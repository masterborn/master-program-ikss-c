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
`;

function SocialBanner() {
  const onClickHandler = () => {
    window.open('https://onet.pl', '_blank');
  };
  const keyDownHandler = () => {};
  return (
    <div
      style={{
        width: '1032px!important',
        height: 137,
        float: 'right',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopLeftRadius: '20px',
        borderBottomLeftRadius: '20px',
        boxShadow: `13px 15px 22px ${steelTints.steel_20}`,
      }}
    >
      <Div onClick={onClickHandler} onKeyPress={keyDownHandler} role="button" tabIndex={0}>
        <YoutubeCircleIcon size="20px" />
        <h5>YouTube</h5>
      </Div>
      <Div>
        <InstagramCircleIcon size="20px" />
        <h5>Instagram</h5>
      </Div>
      <Div>
        <FacebookCircleIcon size="20px" />
        <h5>Facebook</h5>
      </Div>
      <Div>
        <LinkedinCircleIcon size="20px" />
        <h5>LinkedIn</h5>
      </Div>
    </div>
  );
}

export default SocialBanner;
