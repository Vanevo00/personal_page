import React, { useContext, useEffect, useState } from 'react'
import { MainContentContainer, WelcomeText } from './StyledMainContent'
import MainContext from '../context/main/mainContext'

const MainContent = () => {
  const mainContext = useContext(MainContext)

  useEffect(() => {
    if (localStorage.visitorName) {
      mainContext.showMainContent()
      setTimeout(() => {
        mainContext.showLogo()
      }, 1000)
      setTimeout(() => {
        mainContext.rotateLogo()
      }, 2000)
      setTimeout(() => {
        mainContext.hideLogo()
      }, 3000)
    }
  },[])

  if(!mainContext.isMainContentShowing) {
    return null
  }

  return (
    <MainContentContainer>
    </MainContentContainer>
  )
}

export default MainContent
