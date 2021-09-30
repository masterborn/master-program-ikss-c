import React from 'react';
import styled from 'styled-components';
import { blueTints, color } from '../../../styles/GlobalStyles';

const GroupDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${blueTints.blue_20};
  border-radius: 26px;
  margin: 20px 0 30px 0;
`;

const Button = styled.button`
  padding: 0 30px 0 30px;
  color: ${(props) => (props.isActive ? 'white' : 'black')};
  height: 48px;
  border-radius: 26px;
  border: transparent;
  min-width: auto;
  background-color: ${(props) => (props.isActive ? `${color.blue}` : `${blueTints.blue_20}`)};
`;

const ButtonGroup = ({ titles, parentCallback, activeProjectId }) => {
  const btnGroup = titles.map((title, index) => (
    <Button
      key={index}
      type="button"
      isActive={index === activeProjectId}
      onClick={() => {
        parentCallback(index);
      }}
    >
      {title}
    </Button>
  ));
  return <GroupDiv>{btnGroup}</GroupDiv>;
};
export default ButtonGroup;
