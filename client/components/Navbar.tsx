import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { LogoLeft, LogoRight, SmallColorfulV, SmallDarkV, SmallLogo } from './StyledLogo'
import { MenuLink, MiddleMenu, NavbarContainer, UserInfo } from './StyledNavbar'
import AuthContext from '../context/auth/authContext'

interface Props {
  show: boolean
}

const Navbar = ({show} : Props) => {
  const authContext = useContext(AuthContext)
  const [pathname, setPathname] = useState('')

  useEffect(() => {
    setPathname(window.location.pathname)
    authContext.loadUser()
  }, [])

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
              <Link href='/register'>
                <MenuLink last={true} active={pathname === '/register'}>LOGOUT</MenuLink>
              </Link>
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
