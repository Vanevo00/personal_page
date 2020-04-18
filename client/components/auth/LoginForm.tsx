import React, { useContext, useEffect, useState } from 'react'
import Router from 'next/router'
import { FormContainer, FormInput, FormLabel, InputContainer, SuccessMessage, ValidationText } from './StyledAuth'
import { ColorButtonNoBorder } from '../StyledButtons'
import AuthContext from '../../context/auth/authContext'
import MainContext from '../../context/main/mainContext'

const LoginForm = () => {
  const authContext = useContext(AuthContext)
  const mainContext = useContext(MainContext)
  const [inputValues, setInputValues] = useState({
    nameOrEmail: '',
    password: ''
  })

  useEffect(() => {
    if(localStorage.token) {
      Router.push('/')
    }
  }, [])

  const onChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value
    })
  }

  const showValidationText = (param) => {
    let filteredErrors
    if (authContext.error) {
      filteredErrors = authContext.error.filter((err) => err.param === param)
    }
    if (filteredErrors) {
      return filteredErrors.map((err) => <ValidationText key={err.msg}>{err.msg}</ValidationText>)
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    authContext.login({
      nameOrEmail: inputValues.nameOrEmail,
      password: inputValues.password
    })
  }

  return (
    <>
      <FormContainer onSubmit={onSubmit}>
        <InputContainer>
          <FormLabel>Name or Email</FormLabel>
          <FormInput type='text' name='nameOrEmail' value={inputValues.nameOrEmail} onChange={onChange} placeholder={'Strawberry123 or Strawberry123@gmail.com'}/>
          {showValidationText('nameOrEmail')}
        </InputContainer>
        <InputContainer>
          <FormLabel>Password</FormLabel>
          <FormInput type='password' name='password' value={inputValues.password} onChange={onChange}/>
          {showValidationText('password')}
        </InputContainer>
        <ColorButtonNoBorder type='submit'>Log in</ColorButtonNoBorder>
        {authContext.isAuthenticated && <SuccessMessage>Successfully Logged in! Redirecting..</SuccessMessage>}
      </FormContainer>
    </>
  )
}

export default LoginForm
