import React from 'react'
import Navbar from '../components/Navbar'
import { AuthContainer } from '../components/auth/StyledAuth'

const Register = () => {
  return (
    <>
      <Navbar show={true}/>
      <AuthContainer>
        Register
      </AuthContainer>
    </>
  )
}

export default Register
