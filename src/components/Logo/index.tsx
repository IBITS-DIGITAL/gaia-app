import React from 'react'
import styled from 'styled-components/native'
import logo from 'src/assets/images/gaia-logo.png'

const LogoComponent = styled.Image`
  width: 125px;
  height: 125px;
`

export const Logo = () => <LogoComponent source={logo}/>
