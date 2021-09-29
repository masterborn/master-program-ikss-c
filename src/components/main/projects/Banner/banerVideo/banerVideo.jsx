import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  max-width: 57%;
  @media (max-width: 1150px) {
    max-width: 100%;
  }
`;

const BanerVideo = ({ url }) => (
  <Div>
    <video width="100%" autoPlay muted>
      <source src={url} type="video/mp4" />
    </video>
  </Div>
);

export default BanerVideo;
