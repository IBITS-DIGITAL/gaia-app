import { useEffect, useState, useRef } from 'react'
import { TextInput } from 'src/components/TextInput'
import { Button } from 'src/components/Button'
import { Text } from 'src/components/Text'
import { StyledContainer } from 'src/components/StyledContainer'
import { Logo } from 'src/components/Logo'
import { Animated, Easing } from 'react-native'
import { Container, InnerContainer } from 'src/components/Container'
import * as S from './styled'
import loginSplashText from 'src/assets/images/gaia-login-splash-text.png'
import googleIcon from 'src/assets/images/google-icon.png'
import appleIcon from 'src/assets/images/apple-icon.png'

export default function HomeScreen() {
  const [inputValue, setInputValue] = useState('')
  const startOpacity = useRef(new Animated.Value(1)).current

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(startOpacity, {
        toValue: 0,
        duration: 400,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start()

    }, 600)
  }, [startOpacity])

  return (
    <Container>
      <S.SplashTextContainer style={{ opacity: startOpacity }}>
        <S.SplashText source={loginSplashText}/>
      </S.SplashTextContainer>

      <InnerContainer>

        <StyledContainer styles="my-70px items-center position-relative">
          <Logo/>
        </StyledContainer>

        <StyledContainer styles="mb-10px">
          <TextInput label="Username"/>
        </StyledContainer>

        <StyledContainer styles="mb-5px">
          <TextInput
            label="Password"
            value={inputValue}
            onChange={setInputValue}
            secureTextEntry
          />
        </StyledContainer>

        <StyledContainer styles="mb-30px items-right">
          <Button isLink href="/forgot-password">Forgot Password?</Button>
        </StyledContainer>

        <StyledContainer styles="mb-40px">
          <Button>Login</Button>
        </StyledContainer>

        <StyledContainer styles="mb-30px items-center">
          <Text>- or -</Text>
        </StyledContainer>

        <StyledContainer styles="mb-10px">
          <Button
          variation="light"
          borderRadius="6px"
          href="/"
          // rightImage={googleIcon}
        >Sign in with Google</Button>
        </StyledContainer>

        <StyledContainer styles="mb-30px">
          <Button
            variation="light"
            borderRadius="6px"
            href="/"
            // rightImage={appleIcon}
          >Sign in with Apple</Button>
        </StyledContainer>
        
        <StyledContainer styles="mb-30px items-center">
          <Text>
            <Text>Don’t have an account?</Text> <Button isLink href="sign-up">Sign up</Button>
          </Text>
        </StyledContainer>

      </InnerContainer>

    </Container>
  )
}
