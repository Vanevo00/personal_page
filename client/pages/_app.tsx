import React, { Component } from 'react'
import App from 'next/app'
import Head from 'next/head'
import MainState from '../context/main/MainState'
import AuthState from '../context/auth/AuthState'
import theme from '../components/ThemeProvider'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../components/GlobalStyle'

interface BaseProps {
  title?: string
}

class PersonalPage extends App<BaseProps> {
  render() {

    const { Component, pageProps } = this.props;

    return (
      <div>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet"/>
          <title>{`V${this.props.title ? ' - ' + this.props.title : ''}`}</title>
        </Head>
        <MainState>
          <AuthState>
            <ThemeProvider theme={theme}>
              <GlobalStyle/>
              <Component {...pageProps} />
              <script src="https://kit.fontawesome.com/3bca9cb446.js" crossOrigin="anonymous"/>
            </ThemeProvider>
          </AuthState>
        </MainState>
      </div>
    )
  }
}

export default PersonalPage
