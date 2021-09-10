import React from 'react';
import styled from 'styled-components';
import { color, blueTints, steelTints } from '../../../styles/GlobalStyles';
import Info from './icons/Info';
import AlertTriangle from './icons/alert-triangle';
import InfoGray from './icons/info-gray';

const StyledInput = styled.input`
  border-color: ${(props) => (props.error ? color.error : steelTints.steel_30)};
  color: ${color.steel};
  width: 100%;
  height: 48px;
  padding-right: 43px;
  ::placeholder {
    color: ${(props) => (props.error ? color.error : steelTints.steel_60)};
  }
  &:active {
    border-color: ${color.blue};
    color: ${color.steel};
  }
  &:disabled {
    background-color: ${blueTints.blue_05};
    border-color: ${steelTints.steel_40};
    ::placeholder {
      color: ${steelTints.steel_40};
    }
  }
`;
const Containter = styled.div`
  height: 78px;
  width: ${(props) =>
    props.children[1].props.id === 'fname' || props.children[1].props.id === 'lname' ? '282px' : '588px'};
  position: relative;
  margin-top: 9px;
  & svg {
    position: absolute;
    top: 45px;
    right: 14px;
  }
`;
const Label = styled.label`
  display: block;
  text-align: left;
`;

function InfoIcon({ disabled }) {
  return <div> {disabled ? <InfoGray /> : <Info />}</div>;
}

function Input({ id, type, labelText, placeholder, disabled, error, icon, onChange, row, col, name}) {
  return (
    <Containter>
      <Label htmlFor={id}>{labelText}</Label>
      <StyledInput
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        error={error}
        onChange={onChange}
        row={row}
        col={col}
      />
      {icon && (error ? <AlertTriangle /> : <InfoIcon disabled={disabled} />)}
    </Containter>
  );
}

export default Input;
