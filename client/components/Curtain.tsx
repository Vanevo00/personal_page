import React, { useEffect, useState } from 'react'
import { CurtainRight, CurtainContainer, CurtainLeft } from './StyledCurtain'

const Curtain = () => {
  const [showCurtain, setShowCurtain] = useState(false)

  useEffect(() => {
    setShowCurtain(true)
  }, [])

  return (
    <CurtainContainer>
      <CurtainLeft show={showCurtain}>

      </CurtainLeft>
      <CurtainRight show={showCurtain}>

      </CurtainRight>
    </CurtainContainer>
  )
}

export default Curtain
