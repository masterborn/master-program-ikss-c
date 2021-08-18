import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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

function InfoIcon({ disabled }) {
  return <div> {disabled ? <InfoGray /> : <Info />}</div>;
}

function Input({ id, type, labelText, placeholder, disabled, error, icon }) {
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
      {icon && (error ? <AlertTriangle /> : <InfoIcon disabled={disabled} />)}
    </Containter>
  );
}
Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  labelText: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  icon: PropTypes.bool,
};
Input.defaultProps = {
  type: 'text',
  labelText: '',
  placeholder: '',
  disabled: false,
  error: false,
  icon: false,
};

export default Input;
