import React from 'react'
import {
  ColorfulV,
  DarkV,
  StyledLogo,
  LogoContainer,
  LogoLeft,
  LogoRight
} from './StyledLogo'

const Logo = () => {
  return (
    <LogoContainer>
      <StyledLogo>
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
