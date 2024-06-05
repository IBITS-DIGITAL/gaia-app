import { useEffect, useState, useRef } from 'react'
import Input from 'src/components/TextInput'
import Button from 'src/components/Button'
import ScreenLayout from 'src/components/ScreenLayout'
import ContainerComponent from 'src/components/ContainerComponent'
import * as S from './styled'
import loginBg from 'src/assets/images/login-bg.jpeg'
import logo from 'src/assets/images/gaia-logo.png'
import loginSplashText from 'src/assets/images/gaia-login-splash-text.png'
import { Text, Animated, Dimensions, Easing } from 'react-native'

export default function HomeScreen() {
  const [inputValue, setInputValue] = useState('')
  const startOpacity = useRef(new Animated.Value(1)).current
  const loginOpacity = useRef(new Animated.Value(0)).current
  const loginTranslateY = useRef(new Animated.Value(Dimensions.get("screen").height / 4)).current

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(startOpacity, {
        toValue: 0,
        duration: 400,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start()

      Animated.timing(loginOpacity, {
        toValue: 1,
        duration: 400,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start()

      Animated.timing(loginTranslateY, {
        toValue: 0,
        duration: 400,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start()

    }, 800)
  }, [startOpacity, loginOpacity, loginTranslateY])

  return (
    <ScreenLayout testID="home-screen-layout">
      <S.Content
        source={loginBg}
        resizeMode="cover"
        testID="home-screen-content"
      >
        <S.GradientOverlay colors={[
          'rgba(51,51,51,0)',
          'rgba(51,51,51,1)'
        ]}/>
        <S.SplashTextContainer style={{ opacity: startOpacity }}>
          <S.SplashText source={loginSplashText}/>
        </S.SplashTextContainer>

        <S.LoginContainer
          style={{
            opacity: loginOpacity,
            transform: [{ translateY: loginTranslateY }],
          }}
        >
          <S.GradientOverlay colors={[
            'rgba(51,51,51,0)',
            'rgba(51,51,51,0.5)',
            'rgba(51,51,51,0.7)',
            'rgba(51,51,51,1)',
            'rgba(51,51,51,1)'
          ]}/>
          <ContainerComponent styles="my-70px items-center position-relative">
            <S.Logo source={logo}/>
          </ContainerComponent>

          <ContainerComponent styles="mb-10px">
            <Input label="Username"/>
          </ContainerComponent>

          <ContainerComponent styles="mb-5px">
            <Input
              label="Password"
              value={inputValue}
              onChange={setInputValue}
              secureTextEntry
            />
          </ContainerComponent>

          <ContainerComponent styles="mb-30px items-right">
            <Button isLink href="/forgot-passowrd">Forgot Password?</Button>
          </ContainerComponent>

          <ContainerComponent styles="mb-40px">
            <Button>Login</Button>
          </ContainerComponent>

          <ContainerComponent styles="mb-30px items-center">
            <Text>- or -</Text>
          </ContainerComponent>
          
        </S.LoginContainer>

      </S.Content>
    </ScreenLayout>
  )
}
