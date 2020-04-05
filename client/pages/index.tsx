import React from 'react'
import Curtain from '../components/Curtain'
import Layout from '../components/Layout'
import MainContent from '../components/MainContent'
import Logo from '../components/Logo'

const Index = () => {
  return (
    <Layout>
      <Curtain/>
      <Logo/>
      <MainContent/>
    </Layout>
  )
}

export default Index
