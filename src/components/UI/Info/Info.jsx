import React from 'react';
import styled from 'styled-components';
import { PrimaryButton } from '../Button/Button';
import { blueTints } from '../../../styles/GlobalStyles';

const InfoDiv = styled.div`
  grid-column: 1/3;
  justify-self: center;
  width: 1440px;
  height: 352px;
  background-color: ${blueTints.blue_10};
  margin: 100px;
  text-align: center;
  @media (max-width: 600px) {
    display: block;
    width: 375px;
    height: auto;
    padding-bottom: 50px;
    margin: 30px 0;
  }
`;

function Info() {
  return (
    <InfoDiv>
      <h3 style={{ marginTop: '100px' }}>Chcesz zorganizowac z nami podobny projekt?</h3>
      <PrimaryButton style={{ margin: '20px auto' }}>Skontaktuj sie z nami</PrimaryButton>
    </InfoDiv>
  );
}

export default Info;
