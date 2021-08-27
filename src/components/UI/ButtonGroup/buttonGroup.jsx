import React from 'react';
import styled from 'styled-components';
import { blueTints, color } from '../../../styles/GlobalStyles';

const GroupDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${blueTints.blue_20};
  border-radius: 26px;
`;

const Button = styled.button`
  padding: 0 30px 0 30px;
  background-color: ${blueTints.blue_20};
  height: 48px;
  border-radius: 26px;
  border: transparent;
  min-width: auto;
  &:focus {
    background-color: ${color.blue};
  }
`;
const ButtonGroup = ({ titles }) => {
  const btnGroup = titles.map((t) => <Button type="button">{t}</Button>);
  return <GroupDiv>{btnGroup}</GroupDiv>;
};

export default ButtonGroup;
