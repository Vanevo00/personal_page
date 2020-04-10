import styled from 'styled-components'


interface NavbarProps {
  show?: boolean
  last?: boolean
  active?: boolean
}

export const NavbarContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;
  color: ${props => props.theme.colors.mainColor};
  font-size: 1.8rem;
  font-weight: bold;
`

export const MiddleMenu = styled.div<NavbarProps>`
  opacity: ${props => props.show ? 1 : 0};
  transition: 1s;
  transition-delay: 1s;
  z-index: 1;
`

export const UserInfo = styled(MiddleMenu)`
  
`

export const MenuLink = styled.a<NavbarProps>`
  color: ${props => props.theme.colors.mainColor};
  text-decoration: none;
  margin-right: ${props => props.last ? 0 : '2rem'};
  cursor: pointer;
  border-bottom: 2px solid ${props => props.theme.colors.mainDark};
  ${props => props.active && `border-color: ${props.theme.colors.mainColor}`};
  transition: .4s;
  
  &:hover {
    border-color: ${props => props.theme.colors.mainColor};
  }
`
