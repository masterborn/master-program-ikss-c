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
  @media (max-width: 860px) {
    margin: 24px 0;
    flex-flow: wrap;
    align-items: center;
    gap: 12px;
    background-color: white;
  }
`;

const Button = styled.button`
  padding: 0 30px 0 30px;
  color: ${(props) => (props.isActive ? 'white' : 'black')};
  height: 48px;
  cursor: pointer;
  font-family: Mulish;
  font-size: 16px;
  border-radius: 26px;
  border: transparent;
  min-width: auto;
  background-color: ${(props) => (props.isActive ? `${color.blue}` : `${blueTints.blue_20}`)};
`;

const Wrapper = styled.div`
@media (max-width: 860px) {
  &:first-child {
       width: 100%
     }
   }
 }
`;

const ButtonGroup = ({ titles, parentCallback, activeProjectId }) => {
  const btnGroup = titles.map((title, index) => (
    <Wrapper key={index}>
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
    </Wrapper>
  ));
  return <GroupDiv>{btnGroup}</GroupDiv>;
};
export default ButtonGroup;
