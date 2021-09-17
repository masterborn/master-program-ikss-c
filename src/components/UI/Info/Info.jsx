import ModalContext from '@root/contextProviders/modalContext';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { PrimaryButton } from '../Button/Button';

const InfoDiv = styled.div`
  width: 1440px;
  height: 352px;
  background-color: ${({ theme }) => theme.color.blue_10};
  text-align: center;
  padding: 30px 0;
  margin: 92px 0;
  border-radius: 16px;
`;

const StyledHeading = styled.h3`
  margin-top: 100px;
`;
function Info() {
  const { onOpenModal } = useContext(ModalContext);
  return (
    <InfoDiv>
      <StyledHeading>Chcesz zorganizowac z nami podobny projekt?</StyledHeading>
      <PrimaryButton margin="20px auto" onClick={onOpenModal}>
        Skontaktuj sie z nami
      </PrimaryButton>
    </InfoDiv>
  );
}

export default Info;
