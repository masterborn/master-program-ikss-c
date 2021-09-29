import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  padding-bottom: ${(props) => (props.paddingBottom ? props.paddingBottom : '56.25%')};
  overflow: hidden;
  display: flex;
  justify-self: start;
  align-self: stretch;
  width: 100%;
  min-height: 100%;
`;

const BanerVideo = ({ url, paddingBottom }) => (
  <Div paddingBottom={paddingBottom}>
    <video width="320" height="240" autoPlay controls>
      <source src={url} type="video/mp4" />
    </video>
  </Div>
);

export default BanerVideo;
