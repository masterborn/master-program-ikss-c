import React from 'react';
import classes from './youtubeEmbed.module.css';

const YoutubeEmbed = ({ url }) => (
  <div className={classes.videoResponsive}>
    <iframe
      src={`https://www.youtube.com/embed/${url}`}
      frameBorder="0"
      allow="autoplay; encrypted-media;"
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeEmbed;
