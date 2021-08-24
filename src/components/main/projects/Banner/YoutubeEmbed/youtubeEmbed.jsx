import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  padding-bottom: 56.25%;
  overflow: hidden;
  height: 0;
  float: right;
`;

const YoutubeEmbed = ({ url }) => (
  <Div>
    <iframe
      src={`${url}`}
      frameBorder="0"
      allow="autoplay; encrypted-media; "
      title="Embedded youtube"
      width="900px"
      height="505px"
    />
  </Div>
);

export default YoutubeEmbed;
