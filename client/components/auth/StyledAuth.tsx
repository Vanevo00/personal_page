import { GeneralContainer } from '../StyledContainers'
import styled from 'styled-components'

export const AuthContainer = styled(GeneralContainer)`
  display: flex;
`

export const LeftSide = styled.div`
  width: 50%;
  margin-top: 20rem;
  color: ${props => props.theme.colors.mainColor};
  padding-left: 5rem;
`

export const RightSide = styled(LeftSide)`
  border-right: none;
`

export const DescriptionParagraph = styled.p`
  font-size: ${props => props.theme.fontSizes.xl};
`

export const ListItem = styled.li`
  max-width: 70%;
  text-align: justify;
  font-size: ${props => props.theme.fontSizes.l};
  margin-left: -1rem;
  margin-bottom: 1rem;
`
