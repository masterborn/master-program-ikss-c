import React from 'react';
import { FaPrimaryButton, FaSecondaryButton } from '../UI/Button/FaButton';
import { Input } from '../UI/Input/Input';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 600px;
  justify-content: space-between;
  margin: 20px;
`;

function Example() {
  return (
    <Div>
      <h1 style={{ textAlign: 'center' }}>Example</h1>
      <FaPrimaryButton />
      <FaSecondaryButton />
      <Input type="textarea" icon error placeholder="Lorem ipsum dorum" labelText="Pierwszy input" id="email" />

      <Input icon placeholder="Lorem ipsum dorum" labelText="Pierwszy input" id="email" />

      <Input
        icon
        disabled
        placeholder="Lorem ipsum dorum"
        labelText="Pierwszy input"
        id="email"
      />
      <input type="checkbox"></input>
    </Div>
  );
}

export default Example;
