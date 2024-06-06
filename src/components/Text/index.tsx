import React from 'react'
import styled from 'styled-components/native'

const TextContainer = styled.Text`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  line-height: 18px;
  font-size: 14px;
  color: ${({theme}) => theme.color};
`

export const Text = ({children, styles}: any) => <TextContainer style={styles}>{children}</TextContainer>
