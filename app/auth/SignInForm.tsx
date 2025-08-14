import React from 'react'
import LoginForm from './LoginForm'
import GoogleSignIn from '../components/GoogleSignIn'

const SignInForm = () => {
  return (
    <div>
        <LoginForm/>
        <GoogleSignIn/>
    </div>
  )
}

export default SignInForm