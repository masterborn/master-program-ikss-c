import styled from 'styled-components';
import {BodySmall} from '../../../styles/GlobalStyles';

const BIG_BUTTON= {
    width: '134px',
    height: '48px',
    fontSize: '16px',
};
const SMALL_BUTTON= {
    width: '108px',
    height: '36px',
    fontSize: '14px'
};

const PRIMARY_BUTTON = {
    backgroundColor: '#1889E9'
};
const SECONDARY_BUTTON = {
    backgroundColor: '#ffffff'
};

export const PrimaryButton = styled.button`
    background: ${PRIMARY_BUTTON.backgroundColor};
    color: white;
    width: ${props=>props.size?.includes('s') ?  `${SMALL_BUTTON.width}`:`${BIG_BUTTON.width}` };
    height:${props=>props.size?.includes('s') ?  `${SMALL_BUTTON.height}`:`${BIG_BUTTON.height}` };
    left: 59px;
    top: 43px;
    border-radius: 26px;
    border: none;
    font-family: ${BodySmall.fontFamily};
    font-size: ${props=>props.size?.includes('s') ?  `${SMALL_BUTTON.fontSize}`:`${BIG_BUTTON.fontSize}` };
    &:hover {
        background: linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), ${PRIMARY_BUTTON.backgroundColor};
        box-shadow: 0px 4px 8px rgba(24, 137, 233, 0.15);
    }
    &:disabled {
        background: linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), ${PRIMARY_BUTTON.backgroundColor};
    }
    &:focus {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), ${PRIMARY_BUTTON.backgroundColor};
    }
`;

export const SecondaryButton= styled.button`
    background: ${SECONDARY_BUTTON.backgroundColor};
    color: black;
    width: ${props=>props.size?.includes('s') ?  `${SMALL_BUTTON.width}`:`${BIG_BUTTON.width}` };
    height:${props=>props.size?.includes('s') ?  `${SMALL_BUTTON.height}`:`${BIG_BUTTON.height}` };
    left: 59px;
    top: 43px;
    font-family: ${BodySmall.fontFamily};
    font-size: ${props=>props.size?.includes('s') ?  `${SMALL_BUTTON.fontSize}`:`${BIG_BUTTON.fontSize}` };
    border: 2px solid #1A2847;
    border-radius: 26px;
    &:hover {
        border: 2px solid rgba(0,0,0,0.85);
        color: rgba(0,0,0,0.85);
    }
    &:disabled {
        border: 2px solid rgba(0,0,0,0.3);
        color: rgba(0,0,0,0.3);
    }
    &:focus {
        border: 2px solid rgba(0,0,0,0.75);
        color: rgba(0,0,0,0.75);
    }
`;
