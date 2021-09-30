import React from 'react';
import styled from 'styled-components';
import { SecondaryButton } from '../../../../UI/Button/Button';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: left;
  justify-self: center;
  margin-top: 36px;
  padding-left: 24px;
  padding-right: 95px;
  max-width: 490px;
  @media (max-width: 1150px) {
    max-width: 700px;
    padding-right: 24px;
  }
`;
const H1 = styled.h1`
  padding-bottom: 32px;
  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 44px;
    padding-bottom: 24px;
  }
`;
const P = styled.p`
  padding-bottom: 32px;
  @media (max-width: 768px) {
    padding-bottom: 24px;
  }
`;

function Headline({ content }) {
  const { title } = content.fields;
  const description = content.fields.text1.content
    .find((d) => d.content)
    .content.find((v) => v.value).value;

  const clickHandler = () => {};
  return (
    <Div>
      <H1>{title}</H1>
      <P>{description}</P>
      <SecondaryButton onClick={clickHandler}>Skontaktuj sie</SecondaryButton>
    </Div>
  );
}

export default Headline;
