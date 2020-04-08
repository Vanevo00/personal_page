import React, { useContext, useEffect, useState } from 'react'
import { MainContentContainer, MainContentText } from './StyledMainContent'
import MainContext from '../context/main/mainContext'
import { LogoLeft, LogoRight, SmallColorfulV, SmallDarkV, SmallLogo } from './StyledLogo'
import Navbar from './Navbar'

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
      <Navbar/>
      <MainContentText show={mainContext.isMainContentTextShowing}>

      </MainContentText>
    </MainContentContainer>
  )
}

export default MainContent
