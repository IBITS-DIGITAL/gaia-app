import styled from 'styled-components/native'
import { Dimensions, Animated } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export const GradientOverlay = styled(LinearGradient)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${Dimensions.get("screen").height}px;
`

export const SplashTextContainer = styled(Animated.View)`
  position: absolute;
  top: 0;
  left: 0;
  width: ${Dimensions.get("screen").width}px;
  height: ${Dimensions.get("screen").height / 1.2}px;
  justify-content: center;
  align-items: center;
`

export const SplashText = styled.Image`
  width: 265px;
  height: 245px;
`
