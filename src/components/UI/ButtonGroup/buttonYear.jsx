import React from 'react';
import styled from 'styled-components';

const blue20 = (props) => props.theme.color.blue_20;
const blue = (props) => props.theme.color.blue;
const GroupDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.blue_20};
  border-radius: 26px;
  margin: 20px 0 30px 0;
`;

const Button = styled.button`
  padding: 0 30px 0 30px;
  color: ${(props) => (props.isActive ? 'white' : 'black')};
  height: 48px;
  border-radius: 26px;
  cursor: pointer;
  border: transparent;
  min-width: auto;
  background-color: ${(props) => (props.isActive ? blue : blue20)};
`;

const ButtonYear = ({ years, selectYearHandler, activeYear }) => {
  const lastYears = [...years];
  const take3Years = lastYears.slice(0, 3);
  const btnGroup = take3Years.map((year) => (
    <Button
      key={year}
      type="button"
      isActive={year === activeYear}
      onClick={() => {
        selectYearHandler(year);
      }}
    >
      {year}
    </Button>
  ));
  return <GroupDiv>{btnGroup}</GroupDiv>;
};
export default ButtonYear;
