import React from 'react'
import * as S from './styled'

interface Props {
  styles?: string
  children?: React.ReactNode
}

export const StyledContainer = ({ styles, children }: Props) => <S.StyledContainer styles={styles}>{ children }</S.StyledContainer>
