import React from 'react'
import LoginForm from './LoginForm'
import GoogleSignIn from '../components/GoogleSignIn'
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'

const Auth = () => {
  return (
    <div className='flex w-[900px] justify-between mt-8 mb-8'>
        <SignInForm/>
        <SignUpForm/>
    </div>
  )
}

export default Auth