import React, { useContext, useState } from 'react'
import { FormContainer, FormInput, FormLabel } from './StyledAuth'
import { ColorButtonNoBorder } from '../StyledButtons'
import AuthContext from '../../context/auth/authContext'

const RegisterForm = () => {
  const authContext = useContext(AuthContext)
  const [inputValues, setInputValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const onChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (inputValues.password !== inputValues.confirmPassword) {
      return authContext.setError('passwords do not match')
    }

  }

  return (
    <>
      <FormContainer onSubmit={onSubmit}>
        <FormLabel>Name</FormLabel>
        <FormInput type='text' name='name' value={inputValues.name} onChange={onChange} required/>
        <FormLabel>Email</FormLabel>
        <FormInput type='email' name='email' value={inputValues.email} onChange={onChange} required/>
        <FormLabel>Password</FormLabel>
        <FormInput type='password' name='password' value={inputValues.password} onChange={onChange} required/>
        <FormLabel>Re-enter password</FormLabel>
        <FormInput type='password' name='confirmPassword' value={inputValues.confirmPassword} onChange={onChange} required/>
        <ColorButtonNoBorder type='submit'>Register</ColorButtonNoBorder>
      </FormContainer>
    </>
  )
}

export default RegisterForm
