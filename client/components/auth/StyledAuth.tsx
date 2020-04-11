import { GeneralContainer } from '../StyledContainers'
import styled from 'styled-components'

export const AuthContainer = styled(GeneralContainer)`
  display: flex;
`
//left side
export const LeftSide = styled.div`
  width: 50%;
  margin-top: 20rem;
  color: ${props => props.theme.colors.mainColor};
  padding-left: 5rem;
`

export const DescriptionParagraph = styled.p`
  font-size: ${props => props.theme.fontSizes.xl};
`

export const ListItem = styled.li`
  max-width: 90%;
  text-align: justify;
  font-size: ${props => props.theme.fontSizes.l};
  margin-left: -1rem;
  margin-bottom: 1rem;
`

//right side
export const RightSide = styled(LeftSide)`
  border-right: none;
  display: flex;
  justify-content: center;
`

export const FormContainer = styled.form`
  max-width: 90%;
  height: fit-content;
  border: solid 4px ${props => props.theme.colors.mainColor};
  border-radius: 8px;
  padding: 3rem;
  display: flex;
  flex-wrap: wrap;
  margin-right: 5rem;
`

export const FormLabel = styled.label`
  font-size: ${props => props.theme.fontSizes.m};
  width: 100%;
`

export const FormInput = styled.input`
  width: 100%;
  height: 3rem;
  border: none;
  background-color: ${props => props.theme.colors.darkGrey};
  color: ${props => props.theme.colors.mainColor};
  font-size: ${props => props.theme.fontSizes.l};
  padding-left: 1rem;
  margin-bottom: 1rem;
`
