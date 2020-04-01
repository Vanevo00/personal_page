import styled from 'styled-components'

export const CurtainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const CurtainTop = styled.div`
  height: 50%;
  width: 100%;
  background-color: ${props => props.theme.colors.mainDark};
`

export const CurtainBottom = styled(CurtainTop)`
  background-color: ${props => props.theme.colors.mainGreen};
`
