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

export const MainContentText = styled.div<mainContentProps>`
  color: ${props => props.theme.colors.mainColor};
  font-size: 4rem;
  transition: 1s;
  transition-delay: 1s;
  opacity: ${props => props.show ? 1 : 0};
`
