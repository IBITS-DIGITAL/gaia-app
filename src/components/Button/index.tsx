import React from 'react'
import * as S from './styled'

interface Props {
  href?: string
  children?: React.ReactNode
  onPress?: (e: any) => void // Prop for controlled component
  width?: string
  isLink?: boolean
  variation?: "light"
  borderRadius?: string
  rightImage?: any
}

export const Button = (props: Props) => {
  const { children, onPress, href, width = '100%', isLink, variation, borderRadius = '15px', rightImage } = props
  return (
    <S.ButtonContainer
      width={width}
      isLink={isLink}
      variation={variation}
      borderRadius={borderRadius}
    >
      <S.Button
        isLink={isLink}
        href={href || "/"} // Link destination for navigation
        onPress={onPress}
      >
        <S.ButtonText isLink={isLink} variation={variation}>
          {rightImage && (<S.Image source={rightImage}/>)}
          {children || 'Button Text'}
        </S.ButtonText>
      </S.Button>
    </S.ButtonContainer>
  )
}
