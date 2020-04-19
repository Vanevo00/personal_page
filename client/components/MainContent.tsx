import React, { useContext, useEffect } from 'react'
import { MainContentText } from './StyledMainContent'
import MainContext from '../context/main/mainContext'
import Navbar from './Navbar'
import { GeneralContainer } from './StyledContainers'
import saveTomorrowToLocalStorage from '../utils/saveTomorrowToLocalStorage'
import timeToRepeatAnimation from '../utils/timeToRepeatAnimation'

const MainContent = () => {
  const mainContext = useContext(MainContext)

  useEffect(() => {
    if (localStorage.visitorName) {
      if (!localStorage.mainPageVisited && timeToRepeatAnimation()) {
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
          saveTomorrowToLocalStorage()
        },3500)
      } else {
        mainContext.showMainContent()
        mainContext.showMainContentText()
      }
    }
  },[])

  if(!mainContext.isMainContentShowing) {
    return null
  }

  return (
    <GeneralContainer>
      <Navbar show={mainContext.isMainContentTextShowing}/>
      <MainContentText show={mainContext.isMainContentTextShowing}>
        Please do not take design of this page into account as I am merely a coder and not a designer.
      </MainContentText>
    </GeneralContainer>
  )
}

export default MainContent
