import styled from 'styled-components/native'
import { ImageBackground, Image, Dimensions } from 'react-native'

export const Content = styled(ImageBackground)<any>`
  padding: 45px;
  width: ${Dimensions.get("screen").width}px;
  height: ${Dimensions.get("screen").height}px;
`
export const Logo = styled(Image)`
  width: 125px;
  height: 125px;
  margin: 70px auto;
`
