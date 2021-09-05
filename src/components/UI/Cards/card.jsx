import React from 'react';
import styled from 'styled-components';
import { FaPrimaryButton } from '../Button/FaButton';

const CardStyled = styled.div`
  width: 588px;
  height: auto;
  text-align: justify;
  margin: 0;
  justify-content: center;
  align-items: center;
  border-radius: 20px 20px 0 0;
  @media (max-width: 600px) {
    width: 375px;
    height: auto;
  }
`;
const StyledParagraph = styled.p`
  width: 500px;
`;
function Card(props) {
  const { children } = props;
  return (
    <CardStyled>
      <img src={children.imageUrl} alt="climbing" style={{ maxWidth: '100%', height: '320px' }} />
      <h3>{children.title}</h3>
      <h3>{children.date}</h3>
      <StyledParagraph>{children.description}</StyledParagraph>
      <FaPrimaryButton content={children.linkCaption} link={children.linkUrl} />
    </CardStyled>
  );
}

export default Card;
