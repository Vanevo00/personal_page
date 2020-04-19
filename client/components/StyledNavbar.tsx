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

export const MenuButton = styled.button<NavbarProps>`
  background-color: ${props => props.theme.colors.mainDark};
  color: ${props => props.theme.colors.mainColor};
  font-weight: bold;
  font-size: ${props => props.theme.fontSizes.xl};
  margin-right: ${props => props.last ? 0 : '2rem'};
  cursor: pointer;
  border: none;
  border-bottom: 2px solid ${props => props.theme.colors.mainDark};
  transition: .4s;
  position: relative;
  
  &:hover {
    border-color: ${props => props.theme.colors.mainColor};
  }
  
  &:focus {
    outline: none;
  }
`

export const ConfirmationContainer = styled.div<NavbarProps>`
  width: 200px;
  height: 100px;
  border-radius: 4px;
  top: 80px;
  right: ${props => props.show ? '50px' : '-200px'};
  transition: .4s;
  position: absolute;
  background-color: ${props => props.theme.colors.darkGrey};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.mainColor};
  overflow: hidden;
  font-size: ${props => props.theme.fontSizes.l};
  padding-top: 1rem;
`

export const LogoutText = styled.div`
  width: 90%;
`

export const LogoutButtons = styled.div`
  display: flex;
  align-self: flex-end;
  width: 100%;
`

export const LogoutButtonRed = styled.button`
  width: 50%;
  border: none;
  background-color: ${props => props.theme.colors.warning};
  height: 2rem;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.theme.colors.warningLighten};
  }
`

export const LogoutButtonGreen = styled(LogoutButtonRed)`
  background-color: ${props => props.theme.colors.success};
  
  &:hover {
    background-color: ${props => props.theme.colors.successLighten};
  }
`
