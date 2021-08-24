import React from 'react';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import YoutubeEmbed from './YoutubeEmbed/youtubeEmbed';
import Headline from './Headline/headline';
import SocialBanner from './SocialBanner/socialBanner';

function Banner({ content, asset }) {
  const socialYt = content.find((v) => v.fields.identifier === 'social-youtube').fields.linkUrl;
  const socialInsta = content.find((v) => v.fields.identifier === 'social-instagram').fields
    .linkUrl;
  const socialLin = content.find((v) => v.fields.identifier === 'social-linkedin').fields.linkUrl;
  const socialFb = content.find((v) => v.fields.identifier === 'social-facebook').fields.linkUrl;
  const banner = content.find((v) => v.fields.identifier === 'homepage-top-section');
  const video = asset.find((a) => a.fields.title === 'na strone ikss');
  const videoUrl = video.fields.file.url;
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
        <SocialBanner yt={socialYt} insta={socialInsta} lin={socialLin} fb={socialFb} />
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
