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

const ButtonYear = ({ years, parentCallback, activeYear }) => {
  const btnGroup = years.map((year) => (
    <Button
      key={year}
      type="button"
      isActive={year === activeYear}
      onClick={() => {
        parentCallback(year);
      }}
    >
      {year}
    </Button>
  ));
  return <GroupDiv>{btnGroup}</GroupDiv>;
};
export default ButtonYear;
