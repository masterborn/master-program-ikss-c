import React from 'react';
import styled from 'styled-components';
import { PrimaryButton } from '../Button/Button';
import { blueTints } from '../../../styles/GlobalStyles';

const InfoDiv = styled.div`
  width: 1440px;
  height: 352px;
  background-color: ${blueTints.blue_10};
  text-align: center;
  padding: 30px 0;
  margin: 92px 0;
  border-radius: 16px;
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
