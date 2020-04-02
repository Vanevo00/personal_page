import styled from 'styled-components'

interface CurtainProps {
  show?: boolean
  delay?: number
}

export const CurtainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
  align-items: center;
  
  @media only screen and (max-width: ${props => props.theme.breakpoints.s}) {
    flex-direction: column;
  }
`

export const CurtainLeft = styled.div<CurtainProps>`
  height: 100%;
  width: 50%;
  left: -${props => props.show ? 0 : 50}%;
  background-color: ${props => props.theme.colors.mainDark};
  position: absolute;
  transition: 1s;
  transition-timing-function: ease-in-out;
  color: ${props => props.theme.colors.mainColor};
  font-size: 5rem;
  font-weight: bold;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
  @media only screen and (max-width: ${props => props.theme.breakpoints.s}) {
    height: 50%;
    width: 100%;
    top: -${props => props.show ? 0 : 50}%;
    left: auto;
    right: auto;
  }
`

export const CurtainRight = styled(CurtainLeft)`
  background-color: ${props => props.theme.colors.mainColor};
  color: ${props => props.theme.colors.mainDark};
  left: auto;
  right: -${props => props.show ? 0 : 50}%;
  padding-left: 8rem;
  
  @media only screen and (max-width: ${props => props.theme.breakpoints.s}) {
    top: auto;
    bottom: -${props => props.show ? 0 : 50}%;
  }
`

export const CurtainParagraph = styled.p<CurtainProps>`
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 1s ease ${props => props.delay}s;
  
`

export const MiddleLogo = styled.div<CurtainProps>`
  width: 10rem;
  height: 10rem;
  z-index: 2;
  display: flex;
  border-radius: 50%;
  overflow: hidden;
  transition: transform 1s, opacity 1s ease 1.5s;
  opacity: ${props => props.show ? 1 : 0};
  
  &:hover {
    transform: rotate(180deg);
  }
`

export const MiddleLogoLeft = styled.div`
  width: 50%;
  height: 100%;
  background-color: ${props => props.theme.colors.mainColor};
  position: relative;
`

export const MiddleLogoRight = styled(MiddleLogoLeft)`
  background-color: ${props => props.theme.colors.mainDark};
`

export const DarkV = styled.div`
  position: absolute;
  width: 1rem;
  height: 80%;
  background-color: ${props => props.theme.colors.mainDark};
  bottom: 1.5rem;
  transform: rotate(20deg);
  right: 0;
  z-index: 2;
`

export const ColorfulV = styled(DarkV)`
  background-color: ${props => props.theme.colors.mainColor};
  transform: rotate(-20deg);
  left: 0;
  z-index: 1;
`

export const NameInput = styled.input`
  border: none;
  border-bottom: solid 4px ${props => props.theme.colors.mainDark};
  color: ${props => props.theme.colors.mainDark};
  width: 100%;
  font-size: 4rem;
  background-color: ${props => props.theme.colors.mainColor};
  font-weight: bold;
`
