import React from 'react';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import YoutubeEmbed from './YoutubeEmbed/youtubeEmbed';
import Headline from './Headline/headline';
import SocialBanner from './SocialBanner/socialBanner';

function Banner({ context }) {
  console.log(context);
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
        <div>
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ width: '70px', height: '70px', backgroundColor: '#EAF5FF' }}
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
// width: 24px;
//     height: 24px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border-radius: 50%;
//     background-color: #EAF5FF;
