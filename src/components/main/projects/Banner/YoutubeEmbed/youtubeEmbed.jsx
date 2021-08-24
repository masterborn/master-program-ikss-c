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
      style={{ objectFit: 'fill', with: '100%', aspectRatio: '16/9' }}
      src={`${url}`}
      frameBorder="0"
      allow="autoplay; encrypted-media; "
      title="Embedded youtube"
      controls
      width="1200"
      height="505"
    />
  </Div>
);

export default YoutubeEmbed;
