import styled from 'styled-components'

export const ColorButton = styled.button`
  background-color: ${props => props.theme.colors.mainColor};
  border: solid 4px ${props => props.theme.colors.mainDark};
  padding: .5rem;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  
  &:focus {
    outline: 0;
  }
`
