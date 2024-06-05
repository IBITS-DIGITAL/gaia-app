import React from 'react'
import * as S from './styled'

interface Props {
  styles?: string
  children?: React.ReactNode
}

export const ContainerComponent = ({ styles, children }: Props) => <S.ContainerComponent styles={styles}>{ children }</S.ContainerComponent>

export default ContainerComponent
