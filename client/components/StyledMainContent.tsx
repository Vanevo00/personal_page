import styled from 'styled-components'

interface mainContentProps {
  show: boolean
}

export const MainContentContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.mainDark};
  position: absolute;
  top: 0;
`

export const WelcomeText = styled.p<mainContentProps>`
  font-size: 4rem;
  text-align: center;
  margin-top: 14rem;
  color: ${props => props.theme.colors.mainColor};
  transition: 1s;
  opacity: ${props => props.show ? 1 : 0};
`
