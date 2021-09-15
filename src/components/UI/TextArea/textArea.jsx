import React from 'react';
import styled from 'styled-components';
import { color, blueTints, steelTints } from '../../../styles/GlobalStyles';
import Info from '../Input/icons/Info';
import AlertTriangle from '../Input/icons/alert-triangle';
import InfoGray from '../Input/icons/info-gray';

const StyledTextArea = styled.textarea`
  box-size: border-box;
  border-color: ${(props) => (props.error ? color.error : steelTints.steel_30)};
  color: ${color.steel};
  width: 100%;
  padding-right: 43px;
  resize: none;
  ::placeholder {
    color: ${(props) => (props.error ? color.error : steelTints.steel_60)};
  }
  &:active
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
  width: 588px;
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

function TextArea({ id, type, labelText, placeholder, value, disabled, error, icon, onChange, rows, name }) {
  return (
    <Containter>
      <Label htmlFor={id}>{labelText}</Label>
      <StyledTextArea
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        error={error}
        onChange={onChange}
        rows={rows}
      />
      {icon && (error ? <AlertTriangle /> : <InfoIcon disabled={disabled} />)}
    </Containter>
  );
}

export default TextArea;
