import styled from 'styled-components/native'
import { TextInput, Animated } from 'react-native'

export const InputContainer = styled.View`
  width: 100%;
`;
export const Input = styled(TextInput)<any>`
  color: ${({theme}) => theme.textInputColor};
  height: ${({theme}) => theme.textInputHeight};
  background-color: ${({theme}) => theme.textInputBg};
  border: 1px solid ${({theme, isFocused}) => isFocused ? theme.textInputBorderColorFocus : theme.textInputBorderColor};
  border-radius: ${({theme}) => theme.borderRadius};
  padding: 20px 16px 10px;
  font-size: 16px;
`;

export const Label = Animated.createAnimatedComponent(styled.Text`
  position: absolute;
  z-index: 1;
  left: 16px;
  pointer-events: none;
  color: ${({ theme }) => theme.textInputLabelColor};
`);
