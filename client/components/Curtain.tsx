import React, { useContext, useEffect, useRef, useState } from 'react'
import {
  CurtainRight,
  CurtainContainer,
  CurtainLeft,
  MiddleLogo,
  MiddleLogoLeft,
  MiddleLogoRight, DarkV, ColorfulV, CurtainParagraph, NameInput, CurtainButton, UserSpecificParagraph
} from './StyledCurtain'
import VisitorContext from '../context/visitor/visitorContext'

const Curtain = () => {
  const [showCurtain, setShowCurtain] = useState(false)
  const [hideWholeCurtain, setHideWholeCurtain] = useState(false)
  const [visitorName, setVisitorName] = useState('')
  const [userSpecificText, setUserSpecificText] = useState('')
  const [rotateLogo, setRotateLogo] = useState(false)

  const nameInput = useRef(null)
  const visitorContext = useContext(VisitorContext)

  useEffect(() => {
    if (localStorage.visitorName) {
      visitorContext.setVisitor(localStorage.visitorName)
    }
    setShowCurtain(true)

    setTimeout(() => {
      nameInput.current.focus()
    }, 6500)
  }, [])

  const onChange = (e) => {
    setVisitorName(e.target.value)
  }

  const handleNameSubmission = (name) => {
    localStorage.setItem('visitorName', name)
    visitorContext.setVisitor(name)
    if (name === 'Anonymous') {
      setUserSpecificText('Fair enough..')
    } else {
      setUserSpecificText(`Welcome, ${name}!`)
    }
    setTimeout(() => {
      setRotateLogo(true)
    }, 1000)
    setTimeout(() => {
      setShowCurtain(false)
    }, 2500)
    setTimeout(() => {
      setHideWholeCurtain(true)
    }, 3500)
  }

  const onSubmit = (e) => {
    e.preventDefault()
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

      <MiddleLogo show={showCurtain} rotate={rotateLogo}>
        <MiddleLogoLeft>
          <DarkV/>
        </MiddleLogoLeft>
        <MiddleLogoRight>
          <ColorfulV/>
        </MiddleLogoRight>
      </MiddleLogo>

      <CurtainRight show={showCurtain}>
          <CurtainParagraph show={showCurtain} delay={5.5}>What's your name?</CurtainParagraph>
          <form onSubmit={onSubmit}>
            <NameInput type='text' ref={nameInput} show={showCurtain} delay={5.5} onChange={onChange} value={visitorName}/>
            <CurtainButton type='submit' show={showCurtain} delay={5.5}>Submit</CurtainButton>
            <CurtainButton show={showCurtain} delay={7.5} onClick={onDeclineName}>I'm not giving my name to a machine!</CurtainButton>
          </form>
          <UserSpecificParagraph show={showCurtain && !!(userSpecificText)} delay={0}>{userSpecificText}</UserSpecificParagraph>
      </CurtainRight>
    </CurtainContainer>
  )
}

export default Curtain
