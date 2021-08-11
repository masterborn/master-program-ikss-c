import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;
export const color = {
  blue: '#1889E9',
  white: '#ffffff',
  navy: '#1A2847',
  steel: '#61798B',
  error: '#E01A4F',
  success: '#18D4A7',

}
export const blueTints = {
  blue_50: '#8CC4F4',
  blue_40: '#A3D0F6',
  blue_30: '#BADCF8',
  blue_20: '#D1E7FB',
  blue_10: '#E8F3FD',
  blue_05: '#F5FAFF',
}
export const steelTints = {
  blue_70: '#90A1AE',
  blue_60: '#A0AFB9',
  blue_50: '#B0BCC5',
  blue_40: '#C0C9D1',
  blue_30: '#D0D7DC',
  blue_20: '#DFE4E8',
}

export default GlobalStyles;
