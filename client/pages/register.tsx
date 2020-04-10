import React from 'react'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import { AuthContainer } from '../components/auth/StyledAuth'

const Register = () => {
  return (
    <Layout>
      <Navbar show={true}/>
      <AuthContainer>
        Register
      </AuthContainer>
    </Layout>
  )
}

export default Register
