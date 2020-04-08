import styled from 'styled-components'

interface LogoProps {
  show: boolean
  rotate: boolean
}

export const LogoContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  transition: 2s;
`

export const StyledLogo = styled.div<LogoProps>`
  width: 15rem;
  height: 15rem;
  z-index: 2;
  display: flex;
  border-radius: 50%;
  overflow: hidden;
  transition: 1s;
  opacity: ${props => props.show ? 1 : 0};
  transform: rotate(-${props => props.rotate ? 180 : 0}deg);
`

export const SmallLogo = styled(StyledLogo)`
  width: 5rem;
  height: 5rem;
  
  &:hover {
    transform: rotateZ(360deg);
    transition: .5s;
  }
`

export const LogoLeft = styled.div`
  width: 50%;
  height: 100%;
  background-color: ${props => props.theme.colors.mainColor};
  position: relative;
`

export const LogoRight = styled(LogoLeft)`
  background-color: ${props => props.theme.colors.mainDark};
`

export const DarkV = styled.div`
  position: absolute;
  width: 1.5rem;
  height: 80%;
  background-color: ${props => props.theme.colors.mainDark};
  bottom: 2.5rem;
  transform: rotate(20deg);
  right: 0;
  z-index: 3;
`

export const SmallDarkV = styled(DarkV)`
  width: .5rem;
  bottom: 1rem;
`

export const ColorfulV = styled(DarkV)`
  background-color: ${props => props.theme.colors.mainColor};
  transform: rotate(-20deg);
  left: 0;
  z-index: 2;
`

export const SmallColorfulV = styled(SmallDarkV)`
  background-color: ${props => props.theme.colors.mainColor};
  transform: rotate(-20deg);
  left: 0;
  z-index: 2;
`
