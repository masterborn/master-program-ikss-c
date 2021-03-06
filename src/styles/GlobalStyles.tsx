import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  };
  html, body {
    font-family: Mulish;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    letter-spacing: -0.015em;
    color: #61798B;
    height: 100vh;
    text-align: center;
    background: linear-gradient(180deg, #f4faff 0%, rgba(255, 255, 255, 0) 20%) no-repeat fixed;
  };
  body {
    overflow-x: hidden;
  }
  main {
    max-width: 1440px;
    margin: auto;

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
    color: inherit;
  };

  .iconBodyCircle {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #EAF5FF;}


  @media(min-width: 551px) {
    .bm-burger-button{
      width: 28px !important;
      height: 22px !important;
      right: 37px !important;
      top: 30px !important;
    }
    }
  .ScrollUpButtonBody {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 16px 31px rgba(26, 40, 71, 0.1), 0px 6.16296px 9.87407px rgba(26, 40, 71, 0.0607407), 0px 1.3037px 2.52593px rgba(26, 40, 71, 0.0392593);
  };
  .collapse-css-transition {
    transition: height 480ms cubic-bezier(0.4, 0, 0.2, 1);
  }
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
  input:focus, textarea:focus {
    border-color:#1889E9;
    outline: none;
  }
  label{
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 28px;
    letter-spacing: -0.015em;
    color: #1A2847;
  };


  .navigation-wrapper {
  position: relative;


.keen-slider, .keen-slider__slide {
    overflow: visible !important;
  }
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
export const ButtonSmall = {
  fontFamily: 'Mulish',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '18px',
  letterSpacing: '0em',
  textAlign: 'center',
};

export default GlobalStyles;
