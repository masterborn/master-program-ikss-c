import styled from 'styled-components';
import React from 'react';
import { color, blueTints, steelTints } from '../../../styles/GlobalStyles';
import Info from './icons/Info';
import AlertTriangle from './icons/alert-triangle';
import InfoGray from './icons/info-gray';

const StyledInput = styled.input`
  border-color: ${(props) => (props.error ? 'red' : steelTints.steel_30)};
  color: ${color.steel};
  width: 100%;
  padding-right: 43px;
  ::placeholder {
    color: ${steelTints.steel_60};
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
  width: 331px;
  position: relative;
  & svg {
    position: absolute;
    top: 45px;
    right: 14px;
  }
`;
const Label = styled.label`
  display: block;
`;

export function Input({ id, type, labelText, placeholder, disabled, error, icon }) {
  return (
    <Containter>
      <Label for={id}>{labelText}</Label>
      <StyledInput
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        error={error}
      />
      {icon && (error ? <AlertTriangle /> : disabled ? <InfoGray /> : <Info />)}
    </Containter>
  );
}