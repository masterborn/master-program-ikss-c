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
  padding-top: 50px;
`;

export const ClosedButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 50px;
`;

export const StyledFormInputs = styled.form`
  width: 588px;
  height: 556px;
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const StyledFormParagraph = styled.p`
  width: 584px;
  height: 64px;
  margin: 40px auto;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-top: 37px;
`;

export const StyledCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  color: ${steelTints.steel_70};
  margin-top: 25px;
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
`;

export const ToolTipText = styled.span`
  visibility: hidden;
  width: 347px;
  height: 110px;
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
  display: inline-block;
  padding-left: 5px;
  text-decoration: underline;
  font-family: Mulish;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 28px;
  letter-spacing: -0.015em;
  color: ${steelTints.steel_70};
  &:hover span {
    visibility: visible;
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
  height: 40px;
  fontsize: 16px;
  lineheight: 20px;
  width: ${(props) =>
    props.status === 'success' || props.status === 'error' ? '100%' : 'fit-content'};
  background: ${(props) => handleColorType(props.status)};
  pointer-events: ${(props) =>
    props.status === 'success' || props.status === 'error' ? 'none' : 'auto'};
  &:focus {
    background: ${(props) => handleColorType(props.status)};
  }
`;
