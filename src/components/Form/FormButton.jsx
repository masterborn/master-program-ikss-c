import React from 'react';
import SpinnerIcon from '../UI/Icons/SpinnerIcon';
import SuccessIcon from '../UI/Icons/SuccessIcon';
import CircleXIcon from '../UI/Icons/CircleXIcon';
import { StyledFormButton } from './FormStyles';

function FormButton({status, submitButtonText, onClick}) {
  return (
    <StyledFormButton type="submit" onClick={onClick} status={status}>
      {status === 'pending' && <SpinnerIcon />}
      {status === 'error' ? <CircleXIcon /> : <></>}
      {status === 'success' ? <SuccessIcon /> : <></>}
      {submitButtonText}
    </StyledFormButton>
  );
}

export default FormButton;
