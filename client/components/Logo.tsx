import React, { useContext, useEffect } from 'react'
import {
  ColorfulV,
  DarkV,
  StyledLogo,
  LogoContainer,
  LogoLeft,
  LogoRight
} from './StyledLogo'
import MainContext from '../context/main/mainContext'

const Logo = () => {
  const mainContext = useContext(MainContext)

  return (
    <LogoContainer>
      <StyledLogo show={mainContext.isLogoShowing} rotate={mainContext.isLogoRotated}>
        <LogoLeft>
          <DarkV/>
        </LogoLeft>
        <LogoRight>
          <ColorfulV/>
        </LogoRight>
      </StyledLogo>
    </LogoContainer>
  )
}

export default Logo
