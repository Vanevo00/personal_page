import styled from 'styled-components'

interface CurtainProps {
  show: boolean
}

export const CurtainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  position: relative;
  
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
  
  @media only screen and (max-width: ${props => props.theme.breakpoints.s}) {
    height: 50%;
    width: 100%;
    top: -${props => props.show ? 0 : 50}%;
    left: auto;
    right: auto;
  }
`

export const CurtainRight = styled(CurtainLeft)`
  background-color: ${props => props.theme.colors.mainGreen};
  left: auto;
  right: -${props => props.show ? 0 : 50}%;
  
  @media only screen and (max-width: ${props => props.theme.breakpoints.s}) {
    top: auto;
    bottom: -${props => props.show ? 0 : 50}%;
  }
`
