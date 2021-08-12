import React from 'react';
import styled from 'styled-components';

const btn = styled.button`
    background: ${props=>(props.primary ? '#1889E9':'#FFFFFF')};
    color: white;
    width: 134px;
    height: 48px;
    left: 59px;
    top: 43px;
    border: ${(props)=>(props.primary ? '': '2px solid #1A2847')}
    border-radius: 26px;
    text: Button;
`;


function Button(){
    return <btn primary={"test" ? 1:0}/>
}
export default Button;