import styled from 'styled-components/native'
import { ImageBackground, Image, Dimensions, Animated } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export const Content = styled(ImageBackground)<any>`
  width: ${Dimensions.get("screen").width}px;
  height: ${Dimensions.get("screen").height}px;
`

export const GradientOverlay = styled(LinearGradient)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${Dimensions.get("screen").height}px;
`

export const InnerContainer = styled(Animated.View)`
  padding: 45px;
  position: absolute;
  top: 0;
  left: 0;
  width: ${Dimensions.get("screen").width}px;
  height: ${Dimensions.get("screen").height}px;
`
