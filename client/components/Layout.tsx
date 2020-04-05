import React from 'react'
import Head from 'next/head'
import GlobalStyle from './GlobalStyle'
import { ThemeProvider } from 'styled-components'
import theme from './ThemeProvider'
import AuthState from '../context/auth/AuthState'
import MainState from '../context/main/MainState'

interface Props {
  title?: string
  children: any
}

const Layout = (props: Props) => {
  return (
    <MainState>
      <AuthState>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet"/>
          <title>{`V${props.title ? ' - ' + props.title : ''}`}</title>
        </Head>
        <ThemeProvider theme={theme}>
          <GlobalStyle/>
          {props.children}
          <script src="https://kit.fontawesome.com/3bca9cb446.js" crossOrigin="anonymous"/>
        </ThemeProvider>
      </AuthState>
    </MainState>
  )
}

export default Layout
