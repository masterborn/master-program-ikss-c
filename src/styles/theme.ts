import { DefaultTheme } from 'styled-components';

export const fontFamily = {} as const;

export const fontWeight = {};

export const color = {
  blue_50: '#8CC4F4',
  blue_40: '#A3D0F6',
  blue_30: '#BADCF8',
  blue_20: '#D1E7FB',
  blue_10: '#E8F3FD',
  blue_05: '#F5FAFF',
  blue: '#1889E9',
  white: '#ffffff',
  navy: '#1A2847',
  steel: '#61798B',
  error: '#E01A4F',
  success: '#18D4A7',
  card: '#61798B',
} as const;

export const medias = {};

const theme: DefaultTheme = {
  fontFamily,
  fontWeight,
  color,
  medias,
} as const;

export default theme;
