import styled from 'styled-components';
import { BodySmall, ButtonSmall } from '../../../styles/GlobalStyles';

const BIG_BUTTON = {
  height: '40px',
  fontSize: '16px',
  padding: '14px 24px',
};
const SMALL_BUTTON = {
  height: '36px',
  fontSize: '14px',
  lineHeight: '18px',
  padding: '9px 16px',
};

const PRIMARY_BUTTON = {
  backgroundColor: '#1889E9',
};
const SECONDARY_BUTTON = {
  backgroundColor: '#ffffff',
};

export const PrimaryButton = styled.button`
  padding: ${(props) =>
    props.size === 'small' ? `${SMALL_BUTTON.padding}` : `${BIG_BUTTON.padding}`};
  background: ${PRIMARY_BUTTON.backgroundColor};
  color: white;
  width: fit-content;
  margin: ${(props) => props.margin || '0px'};
  align-self: ${(props) => props.alignSelf || 'auto'};
  height: ${(props) =>
    props.size === 'small' ? `${SMALL_BUTTON.height}` : `${BIG_BUTTON.height}`};
  left: 59px;
  cursor: pointer;
  top: 43px;
  border-radius: 26px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  font-family: ${BodySmall.fontFamily};
  font-weight: ${BodySmall.fontWeight};
  font-size: ${(props) =>
    props.size === 'small' ? `${SMALL_BUTTON.fontSize}` : `${BIG_BUTTON.fontSize}`};
  &:hover {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)),
      ${PRIMARY_BUTTON.backgroundColor};
    box-shadow: 0px 4px 8px rgba(24, 137, 233, 0.15);
  }
  &:disabled {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)),
      ${PRIMARY_BUTTON.backgroundColor};
  }
  &:focus {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
      ${PRIMARY_BUTTON.backgroundColor};
  }
`;

export const SecondaryButton = styled.button`
  padding: ${(props) =>
    props.size === 'small' ? `${SMALL_BUTTON.padding}` : `${BIG_BUTTON.padding}`};
  background: ${SECONDARY_BUTTON.backgroundColor};
  color: black;
  height: ${(props) =>
    props.size === 'small' ? `${SMALL_BUTTON.height}` : `${BIG_BUTTON.height}`};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: fit-content;
  font-family: ${BodySmall.fontFamily};
  font-weight: ${ButtonSmall.fontWeight};
  font-size: ${(props) =>
    props.size === 'small' ? `${SMALL_BUTTON.fontSize}` : `${BIG_BUTTON.fontSize}`};
  border: 2px solid #1a2847;
  border-radius: 26px;
  &:hover {
    border: 2px solid rgba(0, 0, 0, 0.85);
    color: rgba(0, 0, 0, 0.85);
  }
  &:disabled {
    border: 2px solid rgba(0, 0, 0, 0.3);
    color: rgba(0, 0, 0, 0.3);
  }
  &:focus {
    border: 2px solid rgba(0, 0, 0, 0.75);
    color: rgba(0, 0, 0, 0.75);
  }
`;
