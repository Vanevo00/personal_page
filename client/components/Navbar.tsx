import React, { useContext, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { LogoLeft, LogoRight, SmallColorfulV, SmallDarkV, SmallLogo } from './StyledLogo'
import {
  ConfirmationContainer, LogoutButtonGreen, LogoutButtonRed,
  LogoutButtons, LogoutText,
  MenuButton,
  MenuLink,
  MiddleMenu,
  NavbarContainer,
  UserInfo
} from './StyledNavbar'
import AuthContext from '../context/auth/authContext'

interface Props {
  show: boolean
}

const Navbar = ({show} : Props) => {
  const authContext = useContext(AuthContext)
  const confirmationWindow = useRef();
  const [pathname, setPathname] = useState('')
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false)

  useEffect(() => {
    setPathname(window.location.pathname)
    authContext.loadUser()
    document.addEventListener("mousedown", handleClick)
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [])

  const handleClick = (e) => {
    // @ts-ignore
    if (confirmationWindow && confirmationWindow.current && confirmationWindow.current.contains(e.target)) {
      return;
    }
    setShowLogoutConfirmation(false)
  }

  const handleLogoutClick = () => {
    setShowLogoutConfirmation(true)
  }

  const handleCancelClick = () => {
    setShowLogoutConfirmation(false)
  }

  const handleConfirmClick = () => {
    authContext.logout()
  }

  return (
    <NavbarContainer>
      <SmallLogo show={show} rotate={true}>
        <LogoLeft>
          <SmallDarkV/>
        </LogoLeft>
        <LogoRight>
          <SmallColorfulV/>
        </LogoRight>
      </SmallLogo>
      <MiddleMenu show={show}>
        <Link href='/'>
          <MenuLink active={pathname === '/'}>HOME</MenuLink>
        </Link>
        <Link href='/'>
          <MenuLink>ITEM</MenuLink>
        </Link>
        <Link href='/'>
          <MenuLink>ITEM</MenuLink>
        </Link>
        <Link href='/'>
          <MenuLink last={true}>ITEM</MenuLink>
        </Link>
      </MiddleMenu>
      <UserInfo show={show}>
        {
          authContext.user
          ?
            <>
              <Link href='#'>
                <MenuLink active={false}>{authContext.user.name}</MenuLink>
              </Link>
              <MenuButton last={true} onClick={handleLogoutClick}>LOGOUT</MenuButton>
              <ConfirmationContainer show={showLogoutConfirmation} ref={confirmationWindow}>
                <LogoutText>Are you sure you want to logout?</LogoutText>
                <LogoutButtons>
                  <LogoutButtonRed onClick={handleConfirmClick}>Logout</LogoutButtonRed>
                  <LogoutButtonGreen onClick={handleCancelClick}>Close</LogoutButtonGreen>
                </LogoutButtons>
              </ConfirmationContainer>
            </>
          :
            <>
              <Link href='/login'>
                <MenuLink active={pathname === '/login'}>LOGIN</MenuLink>
              </Link>
              <Link href='/register'>
                <MenuLink last={true} active={pathname === '/register'}>REGISTER</MenuLink>
              </Link>
            </>
        }

      </UserInfo>
    </NavbarContainer>
  )
}

export default Navbar
