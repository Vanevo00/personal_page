import React from 'react'
import { FormContainer, FormInput, FormLabel } from './StyledAuth'
import { ColorButtonNoBorder } from '../StyledButtons'

const RegisterForm = () => {
  const onSubmit = (e) => {
    e.preventDefault()
    console.log('onSubmit')
  }

  return (
    <>
      <FormContainer onSubmit={onSubmit}>
        <FormLabel>Name</FormLabel>
        <FormInput type='text' name='name' required/>
        <FormLabel>Email</FormLabel>
        <FormInput type='email' name='email' required/>
        <FormLabel>Password</FormLabel>
        <FormInput type='password' name='password' required/>
        <FormLabel>Re-enter password</FormLabel>
        <FormInput type='password' name='repeatPassword' required/>
        <ColorButtonNoBorder type='submit'>Register</ColorButtonNoBorder>
      </FormContainer>
    </>
  )
}

export default RegisterForm
