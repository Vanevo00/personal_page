import React, { useContext, useEffect, useState } from 'react'
import { MainContentContainer, MainContentText } from './StyledMainContent'
import MainContext from '../context/main/mainContext'
import { LogoLeft, LogoRight, SmallColorfulV, SmallDarkV, SmallLogo } from './StyledLogo'

const MainContent = () => {
  const mainContext = useContext(MainContext)

  useEffect(() => {
    if (localStorage.visitorName) {
      mainContext.showMainContent()
      mainContext.rotateLogo()
      setTimeout(() => {
        mainContext.showLogo()
      }, 1000)
      setTimeout(() => {
        mainContext.hideLogo()
      }, 2000)
      setTimeout(() => {
        mainContext.showMainContentText()
      },3500)
    }
  },[])

  if(!mainContext.isMainContentShowing) {
    return null
  }

  return (
    <MainContentContainer>
      <SmallLogo show={mainContext.isMainContentTextShowing} rotate={true}>
        <LogoLeft>
          <SmallDarkV/>
        </LogoLeft>
        <LogoRight>
          <SmallColorfulV/>
        </LogoRight>
      </SmallLogo>
      <MainContentText show={mainContext.isMainContentTextShowing}>
          PES
      </MainContentText>
    </MainContentContainer>
  )
}

export default MainContent
