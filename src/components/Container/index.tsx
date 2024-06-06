import { useEffect, useRef } from 'react'
import ScreenLayout from 'src/components/ScreenLayout'
import * as S from './styled'
import loginBg from 'src/assets/images/login-bg.jpeg'
import { Animated, Easing } from 'react-native'

interface IContainer {
  bg?: string
  children?: React.ReactNode
}
export const Container = (props: IContainer) => {
  const { bg, children } = props;

  return (
    <ScreenLayout>
      <S.Content
        source={bg || loginBg}
        resizeMode="cover"
      >
        <S.GradientOverlay colors={['rgba(51,51,51,0)', 'rgba(51,51,51,1)']}/>
        {children}
      </S.Content>
    </ScreenLayout>
  )
}

export const InnerContainer = ({children, delay = 600}: any) => {
  const innerContainerOpacity = useRef(new Animated.Value(0)).current
  const innerContainerTranslateY = useRef(new Animated.Value(80)).current

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(innerContainerOpacity, {
        toValue: 1,
        duration: 400,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start()

      Animated.timing(innerContainerTranslateY, {
        toValue: 0,
        duration: 400,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start()

    }, delay)
  }, [innerContainerOpacity, innerContainerTranslateY])

  return (
    <S.InnerContainer
      style={{
        opacity: innerContainerOpacity,
        transform: [{ translateY: innerContainerTranslateY }],
      }}
    >
      <S.GradientOverlay colors={[
        'rgba(51,51,51,0)',
        'rgba(51,51,51,0.5)',
        'rgba(51,51,51,0.7)',
        'rgba(51,51,51,1)',
        'rgba(51,51,51,1)'
      ]}/>
      {children}
    </S.InnerContainer>
  )
}
