import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  padding-bottom: 56.25%;
  overflow: hidden;
  display: flex;
  justify-self: start;
  align-self: stretch;
  width: 100%;
  min-height: 100%;
`;

const YoutubeEmbed = ({ url }) => (
  <Div>
    <iframe
      style={{ maxWidth: 1200, with: '100%', height: 535, aspectRatio: '16/9' }}
      src={`${url}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      controls
    />
  </Div>
);

export default YoutubeEmbed;
