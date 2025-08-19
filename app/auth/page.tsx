import React from 'react'
import LoginForm from './LoginForm'
import GoogleSignIn from '../components/GoogleSignIn'
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'

const Auth = () => {
  return (
    <div className='flex items-center justify-center'>
    <div className='flex items-center w-[1100px] bg-gray-50 justify-between mt-8 mb-8 p-2 '>
        <SignInForm/>
        <SignUpForm/>
    </div>
    </div>
  )
}

export default Auth