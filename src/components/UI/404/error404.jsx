import React from 'react';
import styled from 'styled-components';
import CloseSVG from '../../../assets/error/ikss404.svg';

const StyledErrorSVG = styled.div`
  width: 693px;
  height: 291px;
  max-width: 1440px;
  margin: 116px auto 57px;
  @media (max-width: 860px) {
    width: 325.38px;
    height: 136.63px;
    margin: 207px auto 40.37px;
  }
`;

function Error404() {
  return (
    <StyledErrorSVG>
      <CloseSVG />
    </StyledErrorSVG>
  );
}

export default Error404;
