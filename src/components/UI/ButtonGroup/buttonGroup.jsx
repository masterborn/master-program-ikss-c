import React, { useRef, useEffect } from 'react';
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
    border: transparent;
    outline: none;
  }
`;

const ButtonGroup = ({ titles, parentCallback }) => {
  const clickHandler = (index) => {
    parentCallback(index);
  };
  const onLoadHandler = (index) => {
    document.getElementById(index).focus();
  };
  const btnRef = useRef();
  useEffect(() => {
    btnRef.current.id = 0;
    onLoadHandler(btnRef.current.id);
  }, []);

  const btnGroup = titles.map((title, index) => (
    <Button
      key={title}
      type="button"
      onClick={() => clickHandler(index)}
      id={index}
      onLoad={() => onLoadHandler(index)}
      ref={btnRef}
    >
      {title}
    </Button>
  ));
  return <GroupDiv>{btnGroup}</GroupDiv>;
};

export default ButtonGroup;
