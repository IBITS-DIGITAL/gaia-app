import styled from 'styled-components/native'
import { Platform } from 'react-native'
import { Link } from 'expo-router'

const getVariation = (variation: string, theme: any) => {
  switch(true) {
    case variation === 'light':
      return {
        bg: theme.buttonBgLight,
        color: theme.buttonColorLight
      }
    default: return {
      bg: theme.buttonBg,
      color: theme.buttonColor
    }
  }
}
export const ButtonContainer = styled.View<any>`
  ${({isLink, theme, width, variation, borderRadius}) => !isLink ? `
    border-radius: ${borderRadius};
    background-color: ${getVariation(variation, theme).bg};
    width: ${width};
  ` : ''}
`

export const Button = styled(Link)<any>`
  ${({isLink}) => !isLink ? `
    padding: 16px;
    text-align: center;
    ${Platform.select({
      ios: `
        shadow-color: #000;
        shadow-offset: 0px 4px;
        shadow-opacity: 0.3;
        shadow-radius: 4px;
      `,
      android: `
        elevation: 10;  // Adjust elevation for Android shadow
      `,
    })}
  ` : ''}
`

export const ButtonText = styled.Text<any>`
  ${({isLink, theme, variation}) => isLink ? `
    color: ${theme.linkColor};
    font-size: 14px;
    line-height: 18px;
  ` : `
    font-size: 14px;
    line-height: 21px;
    color: ${getVariation(variation, theme).color};
  `}
`

export const Image = styled.Image`
  height: 20px;
  margin-right: 10px;
`