import styled from 'styled-components/native'
import { Text, Platform } from 'react-native'
import { Link } from 'expo-router'

export const ButtonContainer = styled.View<any>`
  ${({isLink, theme, width}) => !isLink ? `
    border-radius: 15px;
    background-color: ${theme.buttonBg};
    width: ${width};
  ` : ''}
`;

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
`;

export const ButtonText = styled(Text)<any>`
  ${({isLink, theme}) => isLink ? `
    color: ${theme.buttonBg};
    font-size: 12px;
    line-height: 18px;
  ` : `
    font-size: 14px;
    line-height: 21px;
    color: white;
  `}
`;