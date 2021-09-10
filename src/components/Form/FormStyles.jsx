import styled from 'styled-components';
import { color } from '@root/styles/GlobalStyles';
import { PrimaryButton } from '../UI/Button/Button';

export const StyledForm = styled.div`
  text-align: center;
  width: 748px;
  height: 907px;
  margin: 108px auto -259px auto;
  background: #ffffff;
  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
  border-radius: 16px;
  position: relative;
  z-index: 50;
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

export const StyledCheckbox = styled.label`
  display: flex;
  align-items: center;
  color: #90a1ae;
  margin-top: 25px;
`;

export const ToolTipText = styled.span({
  visibility: 'hidden',
  width: '347px',
  height: '110px',
  fontSize: '10px',
  lineHeight: '18px',
  backgroundColor: '#E8F3FD',
  textAlign: 'center',
  borderRadius: '6px',
  padding: '13px 19px',
  position: 'absolute',
  zIndex: 1,
  bottom: '120%',
  left: '18%',
  marginLeft: '-60px',
});

export const StyledToolTip = styled.span({
  position: 'relative',
  display: 'inline-block',
  paddingLeft: '5px',
  textDecoration: 'underline',
  fontFamily: 'Mulish',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '14px',
  lineHeight: '28px',
  letterSpacing: '-0.015em',
  color: '#90A1AE',
  ':hover span': {
    visibility: 'visible',
  },
});

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
