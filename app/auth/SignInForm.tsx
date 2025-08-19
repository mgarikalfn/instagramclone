import React from 'react'
import LoginForm from './LoginForm'
import GoogleSignIn from '../components/GoogleSignIn'

const SignInForm = () => {
  return (
    <div className='flex flex-col gap-4'>
        <LoginForm/>
        <GoogleSignIn/>
    </div>
  )
}

export default SignInForm