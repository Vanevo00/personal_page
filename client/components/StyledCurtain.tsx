import styled from 'styled-components'
import { ColorButton } from './StyledButtons'

interface CurtainProps {
  show?: boolean
  delay?: number
  rotate?: boolean
}

export const CurtainContainer = styled.div<CurtainProps>`
  width: 100%;
  height: 100vh;
  display: ${props => props.show ? 'flex' : 'none'};
  flex-direction: row;
  position: relative;
  justify-content: center;
  align-items: center;
  z-index:2;
  
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
  font-size: 7rem;
  font-weight: bold;
  padding: 4rem;
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
  padding-left: 14rem;
  justify-content: center;
  
  @media only screen and (max-width: ${props => props.theme.breakpoints.s}) {
    top: auto;
    bottom: -${props => props.show ? 0 : 50}%;
  }
`

export const CurtainParagraph = styled.p<CurtainProps>`
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 1s ease ${props => props.delay}s;
`

export const UserSpecificParagraph = styled(CurtainParagraph)`
  height: 5rem;
  margin-top: 5rem;
  font-size: 4rem;
`

export const CurtainError = styled.p`
 font-size: 2rem;
 color: ${props => props.theme.colors.warning};
 height: 2rem;
`

export const NameInput = styled.input<CurtainProps>`
  border: none;
  border-bottom: dashed 4px ${props => props.theme.colors.mainDark};
  color: ${props => props.theme.colors.mainDark};
  width: 100%;
  font-size: 6rem;
  background-color: ${props => props.theme.colors.mainColor};
  font-weight: bold;
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 1s ease ${props => props.delay}s;
  margin-top: 4rem;
`

export const CurtainButton = styled(ColorButton)<CurtainProps>`
  margin-top: 3rem;
  width: 100%;
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 1s ease ${props => props.delay}s;
`
