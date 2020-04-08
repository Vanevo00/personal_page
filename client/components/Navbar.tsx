import React, { useContext } from 'react'
import Link from 'next/link'
import { LogoLeft, LogoRight, SmallColorfulV, SmallDarkV, SmallLogo } from './StyledLogo'
import MainContext from '../context/main/mainContext'
import { MenuLink, MiddleMenu, NavbarContainer, UserInfo } from './StyledNavbar'

const Navbar = () => {
  const mainContext = useContext(MainContext)

  return (
    <NavbarContainer>
      <SmallLogo show={mainContext.isMainContentTextShowing} rotate={true}>
        <LogoLeft>
          <SmallDarkV/>
        </LogoLeft>
        <LogoRight>
          <SmallColorfulV/>
        </LogoRight>
      </SmallLogo>
      <MiddleMenu show={mainContext.isMainContentTextShowing}>
        <Link href='/'>
          <MenuLink active={true}>HOME</MenuLink>
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
      <UserInfo show={mainContext.isMainContentTextShowing}>LOG IN REGISTER</UserInfo>
    </NavbarContainer>
  )
}

export default Navbar
