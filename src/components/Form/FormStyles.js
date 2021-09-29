import styled from 'styled-components';
import { color, steelTints, blueTints } from '@root/styles/GlobalStyles';
import { PrimaryButton } from '../UI/Button/Button';

export const StyledForm = styled.div`
  text-align: center;
  width: 748px;
  height: 907px;
  margin: 108px auto -259px auto;
  background: ${color.white};
  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
  border-radius: 16px;
  position: relative;
  z-index: 50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 860px) {
    width: 327px;
    height: 1030px;
    & h3 {
      font-size: 18px;
      line-height: 24px;
    }
  }
`;

export const ClosedButton = styled.div`
  position: absolute;
  top: 30px;
  right: 50px;
  @media (max-width: 860px) {
    top: 10px;
    right: 20px;
  }
`;

export const StyledFormInputs = styled.form`
  width: 588px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: left;
  @media (max-width: 860px) {
    width: 327px;
    justify-content: center;
    & p {
      justify-content: flex-start;
    }
  }
`;

export const StyledFormParagraph = styled.p`
  margin: 25px 82px 37px;
  @media (max-width: 860px) {
    font-size: 14px;
    line-height: 28px;
    margin: 24px 16px;
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  margin-top: 15px;
  @media (max-width: 860px) {
    justify-content: center;
  }
`;

export const StyledCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  color: ${steelTints.steel_70};
  margin-top: 25px;
  @media (max-width: 860px) {
    font-size: 14px;
    line-height: 15px;
    margin: 12px 16px 15px;
  }
`;

export const StyledCheckbox = styled.input`
  height: 24px;
  width: 24px;
  padding: 0;
  margin-right: 16px;
  color: ${steelTints.steel_70};
  &:not(:disabled):hover {
    border-color: ${color.blue};
  }
  &:active:not(:disabled) {
    border-color: ${color.blue};
  }
  &:checked {
    border-color: ${color.blue};
    background-color: ${color.blue};
  }
  &:checked:before {
    content: '';
    display: block;
    width: 6px;
    height: 15px;
    border: solid ${color.white};
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    margin: 1px 5px 6px 6px;
  }
  @media (max-width: 860px) {
    height: 24px;
    width: 24px;
    flex-shrink: 0;
  }
`;

export const ToolTipText = styled.span`
  visibility: hidden;
  width: 347px;
  font-size: 10px;
  line-height: 18px;
  font-weight: 400;
  background-color: ${blueTints.blue_10};
  color: ${color.steel};
  text-align: center;
  border-radius: 6px;
  padding: 13px 19px;
  position: absolute;
  z-index: 1;
  bottom: 120%;
  left: 18%;
  margin-left: -60px;
`;

export const StyledToolTip = styled.span`
  position: relative;
  display: inline;
  padding-left: 5px;
  font-family: Mulish;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 28px;
  letter-spacing: -0.015em;
  color: ${color.blue};
  &:hover span,
  :active span {
    visibility: visible;
  }
  @media (max-width: 860px) {
    font-size: 12px;
    line-height: 15px;
  }
`;

function handleColorType(colorType) {
  switch (colorType) {
    case 'pending':
      return color.blue;
    case 'success':
      return color.success;
    case 'error':
      return color.error;
    default:
      return color.blue;
  }
}

export const StyledFormButton = styled(PrimaryButton)`
  justify-content: center;
  height: 48px;
  fontsize: 16px;
  line-height: 20px;
  width: ${(props) => (props.status === 'success' || props.status === 'error' ? '100%' : '187px')};
  background: ${(props) => handleColorType(props.status)};
  pointer-events: ${(props) => (props.status === 'success' ? 'none' : 'auto')};
  &:focus {
    background: ${(props) => handleColorType(props.status)};
  }
  @media (max-width: 860px) {
    width: ${(props) =>
      props.status === 'success' || props.status === 'error' ? 'fit-content' : '154px'};
    font-size: 14px;
    line-height: 18px;
    height: 36px;
    padding: 9px 16px;
  }
`;

export const StyledValidation = styled.p`
  font-size: 14px;
  line-height: 28px;
  text-align: 'left';
  color: ${color.error}
`;

export const StyledNameInputs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 860px) {
    justify-content: center;
  }
`;

export const StyledStaticInputHeight = styled.div`
  height: 115px;
`;

export const StyledStaticTextareaHeight = styled.div`
  height: 170px;
`;

export const StyledStaticCheckboxHeight = styled.div`
  height: 80px;
  @media (max-width: 860px) {
    margin: 12px 16px 24px;
  }
`;
