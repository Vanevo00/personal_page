import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { LogoLeft, LogoRight, SmallColorfulV, SmallDarkV, SmallLogo } from './StyledLogo'
import { MenuLink, MiddleMenu, NavbarContainer, UserInfo } from './StyledNavbar'

interface Props {
  show: boolean
}

const Navbar = ({show} : Props) => {
  const [pathname, setPathname] = useState('')

  useEffect(() => {
    setPathname(window.location.pathname)
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
        <Link href='/login' active={pathname === '/register'}>
          <MenuLink>LOGIN</MenuLink>
        </Link>
        <Link href='/register'>
          <MenuLink last={true} active={pathname === '/register'}>REGISTER</MenuLink>
        </Link>
      </UserInfo>
    </NavbarContainer>
  )
}

export default Navbar
