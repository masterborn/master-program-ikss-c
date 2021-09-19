import React from 'react';
import styled from 'styled-components';
import CloseSVG from '../../../assets/error/ikss404.svg';

const StyledErrorSVG = styled.div`
  max-width: 1440px;
  margin: 116px auto 57px;
`;

function Error404() {
  return (
    <StyledErrorSVG>
      <CloseSVG />
    </StyledErrorSVG>
  );
}

export default Error404;
