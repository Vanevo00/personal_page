import React, { useContext, useEffect, useState } from 'react'
import { FormContainer, FormInput, FormLabel, InputContainer, ValidationText } from './StyledAuth'
import { ColorButtonNoBorder } from '../StyledButtons'
import AuthContext from '../../context/auth/authContext'
import MainContext from '../../context/main/mainContext'

const RegisterForm = () => {
  const authContext = useContext(AuthContext)
  const mainContext = useContext(MainContext)
  const [inputValues, setInputValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  useEffect(() => {
    if (localStorage.visitorName) {
      mainContext.setVisitor(localStorage.visitorName)
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
    if (inputValues.password !== inputValues.confirmPassword) {
      return authContext.setError([{'msg': 'passwords do not match', 'param': 'password'}])
    }
    authContext.register({
      name: inputValues.name,
      email: inputValues.email,
      password: inputValues.password
    })
  }

  return (
    <>
      <FormContainer onSubmit={onSubmit}>
        <InputContainer>
          <FormLabel>Name</FormLabel>
          <FormInput type='text' name='name' value={inputValues.name} onChange={onChange} placeholder={mainContext.visitor === 'Anonymous' ? 'Strawberry123' : mainContext.visitor}/>
          {showValidationText('name')}
        </InputContainer>
        <InputContainer>
          <FormLabel>Email</FormLabel>
          <FormInput type='email' name='email' value={inputValues.email} onChange={onChange} placeholder={mainContext.visitor === 'Anonymous' ? 'Strawberry123@gmail.com' : `${mainContext.visitor}@gmail.com`}/>
          {showValidationText('email')}
        </InputContainer>
        <InputContainer>
          <FormLabel>Password</FormLabel>
          <FormInput type='password' name='password' value={inputValues.password} onChange={onChange}/>
          {showValidationText('password')}
        </InputContainer>
        <InputContainer>
          <FormLabel>Re-enter password</FormLabel>
          <FormInput type='password' name='confirmPassword' value={inputValues.confirmPassword} onChange={onChange}/>
        </InputContainer>
        <ColorButtonNoBorder type='submit'>Register</ColorButtonNoBorder>
      </FormContainer>
    </>
  )
}

export default RegisterForm
