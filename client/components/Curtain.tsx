import React, { useEffect, useState } from 'react'
import { CurtainBottom, CurtainContainer, CurtainTop } from './StyledCurtain'

const Curtain = () => {
  const [showCurtain, setShowCurtain] = useState(false)

  useEffect(() => {
    setShowCurtain(true)
  }, [])

  return (
    <CurtainContainer>
      <CurtainTop show={showCurtain}>

      </CurtainTop>
      <CurtainBottom show={showCurtain}>

      </CurtainBottom>
    </CurtainContainer>
  )
}

export default Curtain
