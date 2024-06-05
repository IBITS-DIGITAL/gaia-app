import React from 'react'
import * as S from './styled'

interface Props {
  href?: string
  children?: React.ReactNode
  onPress?: (e: any) => void // Prop for controlled component
  width?: string
  isLink?: boolean
}

export const Button = (props: Props) => {
  const { children, onPress, href, width = '100%', isLink } = props
  return (
    <S.ButtonContainer width={width} isLink={isLink}>
      <S.Button
        isLink={isLink}
        href={href || "/"} // Link destination for navigation
        onPress={onPress}
      >
        <S.ButtonText isLink={isLink}>
          {children || 'Button Text'}
        </S.ButtonText>
      </S.Button>
    </S.ButtonContainer>
  )
}


export default Button
