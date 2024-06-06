import { TextInput } from 'src/components/TextInput'
import { Button } from 'src/components/Button'
import { StyledContainer } from 'src/components/StyledContainer'
import { Logo } from 'src/components/Logo'
import { Text } from 'src/components/Text'
import { Container, InnerContainer } from 'src/components/Container'

export default function SignUp() {
  return (
    <Container>
      <InnerContainer delay={0}>

        <StyledContainer styles="my-70px items-center">
          <Logo/>
        </StyledContainer>

        <StyledContainer styles="mb-10px">
          <TextInput label="Email"/>
        </StyledContainer>

        <StyledContainer styles="mb-10px">
          <TextInput
            label="Password"
            secureTextEntry
          />
        </StyledContainer>

        <StyledContainer styles="mb-30px">
          <TextInput
            label="Confirm Password"
            secureTextEntry
          />
        </StyledContainer>

        <StyledContainer styles="mb-30px items-center">
          <Button href="/">Sign up</Button>
        </StyledContainer>

        <StyledContainer styles="mb-30px items-center">
          <Text>Have an account? <Button isLink href="/">Sign in</Button></Text>
        </StyledContainer>

      </InnerContainer>
    </Container>
  )
}
