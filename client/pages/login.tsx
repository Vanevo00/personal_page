import React from 'react'
import Navbar from '../components/Navbar'
import { AuthContainer, DescriptionParagraph, LeftSide, ListItem, RightSide } from '../components/auth/StyledAuth'
import LoginForm from '../components/auth/LoginForm'

const Login = () => {
  return (
    <>
      <Navbar show={true}/>
      <AuthContainer>
        <LeftSide>
          <DescriptionParagraph>Login</DescriptionParagraph>
          <ul>
            <ListItem>Checks user's name/email and password against the database</ListItem>
            <ListItem>If the user enters valid data, JWT token is saved in the local storage</ListItem>
            <ListItem>User is saved in context</ListItem>
            <ListItem>Username and logout show in the navbar</ListItem>
            <ListItem>Redirects to homepage after successful login</ListItem>
          </ul>
        </LeftSide>
        <RightSide>
          <LoginForm/>
        </RightSide>
      </AuthContainer>
    </>
  )
}

export default Login
