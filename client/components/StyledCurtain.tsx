import styled from 'styled-components'

interface CurtainProps {
  show: boolean
}

export const CurtainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  
  @media only screen and (min-width: ${props => props.theme.breakpoints.s}) {
    flex-direction: row;
  }
`

export const CurtainTop = styled.div<CurtainProps>`
  height: 50%;
  width: 100%;
  background-color: ${props => props.theme.colors.mainDark};
  position: absolute;
  top: -${props => props.show ? 0 : 50}%;
  transition: 1s;
  transition-timing-function: ease-in-out;
  
  @media only screen and (min-width: ${props => props.theme.breakpoints.s}) {
    height: 100%;
    width: 50%;
    left: -${props => props.show ? 0 : 50}%;
    top: auto;
    bottom: auto;
  }
`

export const CurtainBottom = styled(CurtainTop)`
  background-color: ${props => props.theme.colors.mainGreen};
  top: auto;
  bottom: -${props => props.show ? 0 : 50}%;
  
  @media only screen and (min-width: ${props => props.theme.breakpoints.s}) {
    left: auto;
    right: -${props => props.show ? 0 : 50}%;
  }
`
