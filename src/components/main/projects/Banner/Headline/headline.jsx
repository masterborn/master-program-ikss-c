import React from 'react';
import styled from 'styled-components';
import { SecondaryButton } from '../../../../UI/Button/Button';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: left;
  justify-self: center;
`;

function Headline({ content }) {
  const { title } = content.fields;
  const description = content.fields.text1.content
    .find((d) => d.content)
    .content.find((v) => v.value).value;

  const clickHandler = () => {};
  return (
    <Div>
      <h1 style={{ maxWidth: '490px' }}>{title}</h1>
      <p style={{ maxWidth: '384px' }}>{description}</p>
      <SecondaryButton onClick={clickHandler}>Skontaktuj sie</SecondaryButton>
    </Div>
  );
}

export default Headline;
