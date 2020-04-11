import React, { useContext, useEffect } from 'react'
import { MainContentText } from './StyledMainContent'
import MainContext from '../context/main/mainContext'
import Navbar from './Navbar'
import { GeneralContainer } from './StyledContainers'

const MainContent = () => {
  const mainContext = useContext(MainContext)

  useEffect(() => {
    if (localStorage.visitorName && !mainContext.wasMainPageVisited) {
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
        mainContext.mainPageVisited()
      },3500)
    }
  },[])

  if(!mainContext.isMainContentShowing) {
    return null
  }

  return (
    <GeneralContainer>
      <Navbar show={mainContext.isMainContentTextShowing}/>
      <MainContentText show={mainContext.isMainContentTextShowing}>

      </MainContentText>
    </GeneralContainer>
  )
}

export default MainContent
