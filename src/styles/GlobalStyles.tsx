import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  };
  body {
    font-family: Mulish;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    letter-spacing: -0.015em;
    color: #61798B;
  };
  h1 {
    font-family: Mulish;
    font-style: normal;
    font-weight: 900;
    font-size: 56px;
    line-height: 72px;
    letter-spacing: -0.015em;
    color: #1A2847;
  };
  h2 {
    font-family: Mulish;
    font-style: normal;
    font-weight: 900;
    font-size: 40px;
    line-height: 56px;
    letter-spacing: -0.015em;
    color: #1A2847;    
  };
  h3 {
    font-family: Mulish;
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 44px;
    letter-spacing: -0.015em;
    color: #1A2847;
  };
  h4 {
    font-family: Mulish;
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.015em;
    color: #1A2847;
  };
  h5{
    font-family: Mulish;
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.015em;
    color: #1A2847;    
  };
`;

export const BodySmall = {
  fontFamily: 'Mulish',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '28px', 
  letterSpacing: '-0.015em',
  color: '#61798B'
}

export default GlobalStyles;
