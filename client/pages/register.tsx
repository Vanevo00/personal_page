import React, { useContext, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { AuthContainer, DescriptionParagraph, LeftSide, ListItem, RightSide } from '../components/auth/StyledAuth'
import RegisterForm from '../components/auth/RegisterForm'

const Register = () => {
  return (
    <>
      <Navbar show={true}/>
      <AuthContainer>
        <LeftSide>
          <DescriptionParagraph>Registration</DescriptionParagraph>
          <ul>
            <ListItem>Saves Registered user in the db</ListItem>
            <ListItem>Both frontend and backend validations</ListItem>
            <ListItem>Checks if user with the same username/email already exists</ListItem>
            <ListItem>Creates JWT token and saves it in the local storage</ListItem>
            <ListItem>Visitor name from the introduction page is suggested as name (unless anonymous)</ListItem>
            <ListItem>Saves user in context and shows his name + logout in the navbar</ListItem>
            <ListItem>Redirects to homepage after successful registration</ListItem>
          </ul>
        </LeftSide>
        <RightSide>
          <RegisterForm/>
        </RightSide>
      </AuthContainer>
    </>
  )
}

export default Register
