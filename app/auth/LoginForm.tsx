"use client";

import React, { useActionState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { logIn } from "../actions/login";
import {signIn} from "@/auth"
import GoogleSignIn from "../components/GoogleSignIn";
import FormInput from "../components/ui/FormInput";
import { email } from "zod";
import Button from "../components/ui/Button";

const LoginForm = () => {
  const [state, loginAction] = useActionState(logIn, undefined);
  return (
    
      <form action={loginAction} className="flex max-w-[380px] flex-col gap-2">
        <div className="flex flex-col gap-2">
          <FormInput label="Email" type="email" required name="email" />
        </div>
        {state?.error?.email && <p>{state.error.email}</p>}
        <div className="flex flex-col gap-2">
         <FormInput label="password" type="password" required name="password" />
        </div>
        {state?.error?.password && <p>{state.error.password}</p>}
        <SubmitButton />
      </form>
  );
};

export default LoginForm;

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit">
      Login
    </Button>
  );
}
