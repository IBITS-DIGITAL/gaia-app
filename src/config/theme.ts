import { dimensions, height, width } from 'src/utils/dimensions'

/**
 * Theme For Styled Components
 * -
 */
export const appTheme = {
  background: '#222',
  primary: '#FFF',
  secondary: '#CCC',
  highlight: '#FF2353',
  size: dimensions,
  windowHeight: `${height}px`,
  windowWidth: `${width}px`,


  /** GAIA App Theme */
  transition: 'all .3s ease',
  borderRadius: '6px',

  /** TextInput */
  textInputColor: '#fff',
  textInputSize: '16px',
  textInputBorderColor: '#818181',
  textInputBorderColorFocus: '#fff',
  textInputLabelColor: '#818181',
  textInputLabelSize: '14px',
  textInputHeight: '56px',
  textInputBg: 'rgba(51, 51, 51, 0.8)',

  /** Button */
  buttonColor: '#fff',
  buttonSize: '14px',
  buttonBg: '#277568',
  buttonBgPressed: 'red',
  buttonHeight: '56px',
}

/**
 * Theme For Expo Navigation Header
 * -
 */
export const navTheme = {
  dark: false,
  colors: {
    background: appTheme.background,
    border: appTheme.secondary,
    card: appTheme.background,
    notification: appTheme.highlight,
    primary: appTheme.primary,
    text: appTheme.primary,
  }
}
