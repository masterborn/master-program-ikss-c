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
    width: 100vw;
    height: 100vh;
    text-align: center;
  };
  main {
    max-width: 1440px;
    margin: 88px auto 0;
  }
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
  a{
    text-decoration: none;
  };

  .iconBody {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  };
  .iconBodyCircle {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #EAF5FF;
  };
  .fa-times {
    width: 14px;
    height: 14px;
    color: #61798B;
  };
  .fa-phone-alt {
    width: 16px;
    height: 16px;
    color: #61798B;
  };
  .fa-paper-plane {
    width: 14.5px;
    height: 14px;
    color: #61798B;
  };
  .fa-chevron-down {
    width: 8px;
    height: 16px;
    color: #61798B;
  };
  .fa-chevron-up {
    width: 30px;
    height: 25px;
    color: #1889E9;
  };
  .fa-times-circle {
    width: 21px;
    height: 21px;
    color: #61798B;
  };
  .fa-check-circle {
    width: 20px;
    height: 20px;
    color: #61798B;
  };
  .fa-spinner {
    width: 24px;
    height: 24px;
    color: #61798B;
  };
  .fa-facebook-f {
    width: 10.2px;
    height: 19.2px;
    color: #1A2847;
  };
  .fa-instagram {
    width: 21px;
    height: 21px;
    color: #1A2847;
  };
  .fa-youtube {
    width: 19.21px;
    height: 13.54px;
    color: #1A2847;
  };
  .fa-linkedin {
    width: 18px;
    height: 18px;
    color: #1A2847;
  };
  .iconBodyCircle .fa-facebook-f {
    width: 6.8px;
    height: 12.8px;
    color: #1889E9;
  };
  .iconBodyCircle .fa-instagram {
    width: 12px;
    height: 12px;
    color: #1889E9;
  };
  .iconBodyCircle .fa-youtube {
    width: 12.81px;
    height: 9.02px;
    color: #1889E9;
  };
  .iconBodyCircle .fa-linkedin {
    width: 12px;
    height: 12px;
    color: #1889E9;
  };
  .ScrollUpButtonBody {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 16px 31px rgba(26, 40, 71, 0.1), 0px 6.16296px 9.87407px rgba(26, 40, 71, 0.0607407), 0px 1.3037px 2.52593px rgba(26, 40, 71, 0.0392593);
  };
input, textarea {
    font-family: Mulish;
    border: 1.5px solid #C0C9D1;
    box-sizing: border-box;
    border-radius: 4px;
    transition: box-shadow 200ms;
    -webkit-border-radius:4px;
    -webkit-appearance: none;
    -webkit-transition: box-shadow 200ms;
    font-size: 14px;
    line-height: 28px;
    padding: 12px 10px;
  };


input[type="checkbox"] {
    height: 24px;
    width: 24px;
    padding: 0;
  }
input[type="checkbox"]:not(:disabled):hover {
    border-color:#1889E9;
}

input[type="checkbox"]:active:not(:disabled) {
    border-color:#1889E9; 
}
input:focus {
  border-color:#1889E9;
  outline: none;
}

input[type="checkbox"]:checked {
    border-color: #1889E9;
    background-color: #1889E9;
}

input[type="checkbox"]:checked:before {
content: '';
display: block;
width: 6px;
height: 15px;
border: solid #fff;
border-width: 0 2px 2px 0;
-webkit-transform: rotate(45deg);
transform: rotate(45deg);
margin: 1px 5px 6px 6px;
}
label{
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  letter-spacing: -0.015em;
  color: #1A2847;
}
`;

export const color = {
  blue: '#1889E9',
  white: '#ffffff',
  navy: '#1A2847',
  steel: '#61798B',
  error: '#E01A4F',
  success: '#18D4A7',
};
export const blueTints = {
  blue_50: '#8CC4F4',
  blue_40: '#A3D0F6',
  blue_30: '#BADCF8',
  blue_20: '#D1E7FB',
  blue_10: '#E8F3FD',
  blue_05: '#F5FAFF',
};
export const steelTints = {
  steel_70: '#90A1AE',
  steel_60: '#A0AFB9',
  steel_50: '#B0BCC5',
  steel_40: '#C0C9D1',
  steel_30: '#D0D7DC',
  steel_20: '#DFE4E8',
};

export const BodySmall = {
  fontFamily: 'Mulish',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '28px',
  letterSpacing: '-0.015em',
  color: '#61798B',
};

export default GlobalStyles;
