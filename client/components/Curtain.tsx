import React, { useContext, useEffect, useRef, useState } from 'react'
import {
  CurtainRight,
  CurtainContainer,
  CurtainLeft,
  CurtainParagraph, NameInput, CurtainButton, UserSpecificParagraph, CurtainError
} from './StyledCurtain'
import MainContext from '../context/main/mainContext'

const Curtain = () => {
  const [showCurtain, setShowCurtain] = useState(false)
  const [hideWholeCurtain, setHideWholeCurtain] = useState(false)
  const [visitorName, setVisitorName] = useState('')
  const [userSpecificText, setUserSpecificText] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const nameInput = useRef(null)
  const mainContext = useContext(MainContext)

  useEffect(() => {
    if (localStorage.visitorName) {
      mainContext.setVisitor(localStorage.visitorName)
      setHideWholeCurtain(true)
    } else {
      setShowCurtain(true)
      setTimeout(() => {
        mainContext.showLogo()
      }, 1500)
      setTimeout(() => {
        nameInput.current.focus()
      }, 6500)
    }
  }, [])

  const onChange = (e) => {
    setVisitorName(e.target.value)
  }

  const handleNameSubmission = (name) => {
    localStorage.setItem('visitorName', name)
    mainContext.setVisitor(name)
    if (name === 'Anonymous') {
      setUserSpecificText('Fair enough..')
    } else {
      setUserSpecificText(`Welcome, ${name}!`)
    }
    setTimeout(() => {
      setShowCurtain(false)
    }, 2500)
    setTimeout(() => {
      mainContext.hideLogo()
    }, 4000)
    setTimeout(() => {
      setHideWholeCurtain(true)
    }, 5500)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (visitorName.length < 3 || visitorName.length > 15) {
      return setErrorMessage('your name must be between 3 and 15 characters long')
    }
    handleNameSubmission(visitorName)
  }

  const onDeclineName = (e) => {
    e.preventDefault()
    handleNameSubmission('Anonymous')
  }

  return (
    <CurtainContainer show={!hideWholeCurtain}>
      <CurtainLeft show={showCurtain}>
        <CurtainParagraph show={showCurtain} delay={2.5}>Hi, my name is Vojta.</CurtainParagraph>
        <CurtainParagraph show={showCurtain} delay={4}>I am a JavaScript developer.</CurtainParagraph>
      </CurtainLeft>

      <CurtainRight show={showCurtain}>
          <CurtainParagraph show={showCurtain} delay={5.5}>What's your name?</CurtainParagraph>
          <form onSubmit={onSubmit}>
            <NameInput type='text' ref={nameInput} show={showCurtain} delay={5.5} onChange={onChange} value={visitorName}/>
            <CurtainError>{errorMessage}</CurtainError>
            <CurtainButton type='submit' show={showCurtain} delay={5.5}>Submit</CurtainButton>
            <CurtainButton show={showCurtain} delay={7.5} onClick={onDeclineName}>I'm not giving my name to a machine!</CurtainButton>
          </form>
          <UserSpecificParagraph show={showCurtain && !!(userSpecificText)} delay={0}>{userSpecificText}</UserSpecificParagraph>
      </CurtainRight>
    </CurtainContainer>
  )
}

export default Curtain
