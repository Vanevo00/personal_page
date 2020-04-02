import React, { useEffect, useRef, useState } from 'react'
import {
  CurtainRight,
  CurtainContainer,
  CurtainLeft,
  MiddleLogo,
  MiddleLogoLeft,
  MiddleLogoRight, DarkV, ColorfulV, CurtainParagraph, NameInput
} from './StyledCurtain'

const Curtain = () => {
  const [showCurtain, setShowCurtain] = useState(false)

  const nameInput = useRef(null);

  useEffect(() => {
    setShowCurtain(true)
    nameInput.current.focus()
  }, [])

  return (
    <CurtainContainer>
      <CurtainLeft show={showCurtain}>
        <CurtainParagraph show={showCurtain} delay={2.5}>Hi, my name is Vojta.</CurtainParagraph>
        <CurtainParagraph show={showCurtain} delay={4}>I am a JavaScript developer.</CurtainParagraph>
      </CurtainLeft>

      <MiddleLogo show={showCurtain}>
        <MiddleLogoLeft>
          <DarkV/>
        </MiddleLogoLeft>
        <MiddleLogoRight>
          <ColorfulV/>
        </MiddleLogoRight>
      </MiddleLogo>

      <CurtainRight show={showCurtain}>
        <div>
          <CurtainParagraph show={showCurtain} delay={5.5}>What's your name?</CurtainParagraph>
          <NameInput type='text' ref={nameInput}/>
        </div>
      </CurtainRight>
    </CurtainContainer>
  )
}

export default Curtain
