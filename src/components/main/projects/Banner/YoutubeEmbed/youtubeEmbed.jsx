import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  padding-bottom: ${(props) => (props.padding ? props.padding : '56.25%')};
  overflow: hidden;
  display: flex;
  justify-self: start;
  align-self: stretch;
  width: 100%;
  min-height: 100%;
`;

const YoutubeEmbed = ({ url, sizeHeight, sizeWidth, paddingBottom, ratio, borderRadius }) => (
  <Div padding={paddingBottom}>
    <iframe
      style={{
        maxWidth: sizeWidth || 1200,
        with: '100%',
        height: sizeHeight || 535,
        aspectRatio: ratio || '16/9',
        borderRadius: borderRadius || 0,
      }}
      src={`${url}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      controls
    />
  </Div>
);

export default YoutubeEmbed;
