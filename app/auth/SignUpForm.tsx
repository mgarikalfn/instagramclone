"use client"

import React, { useActionState } from 'react'
import { signup } from '../actions/login'

const SignUpForm = () => {
    const [state,action] = useActionState(signup,undefined)
  return (
   <form action={action}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" placeholder="Name" />
      </div>
      {typeof state === 'object' && state?.errors?.name && <p>{state.errors.name}</p>}
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="Email" />
      </div>
      {typeof state === 'object' && state?.errors?.email && <p>{state.errors.email}</p>}
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" />
      </div>
      {typeof state === 'object' && state?.errors?.password && <p>{state.errors.password}</p>}
      <button type="submit">Sign Up</button>
    </form>
  )
}

export default SignUpForm