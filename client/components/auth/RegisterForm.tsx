import React, { useContext, useState } from 'react'
import { FormContainer, FormInput, FormLabel } from './StyledAuth'
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
    authContext.register({
      name: inputValues.name,
      email: inputValues.email,
      password: inputValues.password
    })
  }

  return (
    <>
      <FormContainer onSubmit={onSubmit}>
        <FormLabel>Name</FormLabel>
        <FormInput type='text' name='name' value={inputValues.name} onChange={onChange} placeholder={mainContext.visitor === 'Anonymous' ? 'Strawberry123' : mainContext.visitor}/>
        <FormLabel>Email</FormLabel>
        <FormInput type='email' name='email' value={inputValues.email} onChange={onChange} placeholder={mainContext.visitor === 'Anonymous' ? 'Strawberry123@gmail.com' : `${mainContext.visitor}@gmail.com`}/>
        <FormLabel>Password</FormLabel>
        <FormInput type='password' name='password' value={inputValues.password} onChange={onChange}/>
        <FormLabel>Re-enter password</FormLabel>
        <FormInput type='password' name='confirmPassword' value={inputValues.confirmPassword} onChange={onChange}/>
        <ColorButtonNoBorder type='submit'>Register</ColorButtonNoBorder>
      </FormContainer>
    </>
  )
}

export default RegisterForm
