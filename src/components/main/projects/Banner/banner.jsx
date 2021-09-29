import React from 'react';
import styled from 'styled-components';
import Headline from './Headline/headline';
import SocialBanner from './SocialBanner/socialBanner';
import BanerVideo from './banerVideo/banerVideo';

const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  height: 505px;
`;

function Banner({ content, asset }) {
  const socialYt = content.find((v) => v.fields.identifier === 'social-youtube').fields.linkUrl;
  const socialInsta = content.find((v) => v.fields.identifier === 'social-instagram').fields
    .linkUrl;
  const socialLin = content.find((v) => v.fields.identifier === 'social-linkedin').fields.linkUrl;
  const socialFb = content.find((v) => v.fields.identifier === 'social-facebook').fields.linkUrl;
  const banner = content.find((v) => v.fields.identifier === 'homepage-top-section');
  const videoUrl = asset.find((a) => a.fields.title === 'na strone ikss').fields.file.url;

  return (
    <>
      <Div id="hero">
        <Headline content={banner} />
        <BanerVideo url={videoUrl} />
      </Div>
      <></>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
        <SocialBanner yt={socialYt} insta={socialInsta} lin={socialLin} fb={socialFb} />
      </div>
    </>
  );
}

export default Banner;
