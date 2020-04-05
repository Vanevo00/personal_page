import styled from 'styled-components'

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

export const StyledLogo = styled.div`
  width: 15rem;
  height: 15rem;
  z-index: 2;
  display: flex;
  border-radius: 50%;
  overflow: hidden;
  transition: 1s;
  opacity: 1;
  
  &:hover {
    transform: rotate(180deg);
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

export const ColorfulV = styled(DarkV)`
  background-color: ${props => props.theme.colors.mainColor};
  transform: rotate(-20deg);
  left: 0;
  z-index: 2;
`
