import React from 'react';
import YoutubeCircleIcon from '@root/components/UI/Icons/YoutubeCircleIcon';
import InstagramCircleIcon from '@root/components/UI/Icons/InstagramCircleIcon';
import FacebookCircleIcon from '@root/components/UI/Icons/FacebookCircleIcon';
import { steelTints } from '../../../../../styles/GlobalStyles';

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
      <div
        style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}
        onClick={onClickHandler}
        onKeyPress={keyDownHandler}
        role="button"
        tabIndex={0}
      >
        <YoutubeCircleIcon />
        YouTube
      </div>
      <div style={{ display: 'inline-flex' }}>
        <InstagramCircleIcon />
        Instagram
      </div>
      <div style={{ display: 'inline-flex' }}>
        <FacebookCircleIcon />
        Facebook
      </div>
    </div>
  );
}

export default SocialBanner;
