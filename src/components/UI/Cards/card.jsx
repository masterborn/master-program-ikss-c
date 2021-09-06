import React from 'react';
import styled from 'styled-components';
import { FaPrimaryButton } from '../Button/FaButton';

const CardStyled = styled.div`
  width: 700px;
  height: auto;
  text-align: justify;
  border-radius: 16px 16px 0 0 !important;
  margin: 30px 0;
  justify-content: center;
  align-items: center;
  border-radius: 20px 20px 0 0;
  background: #ffffff;
  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
  @media (max-width: 600px) {
    width: 375px;
    height: auto;
  }
`;

const Container = styled.div`
  border-radius: 20px 20px 0 0 !important;
`;

const StyledParagraph = styled.p`
  max-width: 100%;
  overflow-wrap: break-word;
  height: auto;
  margin-bottom: 10px;
  @media (max-width: 600px) {
    width: 375px;
  }
`;

const Headline = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
`;
const Content = styled.div`
  padding: 32px;
`;

function Card(props) {
  const { children } = props;
  return (
    <CardStyled>
      <Container>
        <img
          src={children.imageUrl}
          alt="climbing"
          style={{ width: '100%', height: 'auto', borderRadius: '20px 20px 0 0 !important' }}
        />
      </Container>
      <Content>
        <Headline>
          <h4>{children.title}</h4>
          <h5 style={{ marginLeft: '20px', color: '#61798B' }}>{children.date}</h5>
        </Headline>
        <StyledParagraph>{children.description}</StyledParagraph>
        <FaPrimaryButton content={children.linkCaption} link={children.linkUrl} />
      </Content>
    </CardStyled>
  );
}

export default Card;
