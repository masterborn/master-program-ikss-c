import React from 'react';
import YoutubeEmbed from './YoutubeEmbed/youtubeEmbed';
import Headline from './Headline/headline';
import SocialBanner from './SocialBanner/socialBanner';

function Banner({ context }) {
  const video = context.basicContent.find((v) => v.fields.identifier === 'social-youtube');
  const videoUrl = video.fields.linkUrl;
  const banner = context.basicContent.find((v) => v.fields.identifier === 'homepage-top-section');
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          maxHeight: 505,
        }}
      >
        <Headline content={banner} />
        <YoutubeEmbed url={videoUrl} />
      </div>
      <div>
        <SocialBanner />
      </div>
    </>
  );
}

export default Banner;
