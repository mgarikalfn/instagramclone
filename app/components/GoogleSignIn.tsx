"use client";

import { useFormStatus } from "react-dom";
import { googleSignInAction } from "../actions/googleauth";

export default function GoogleSignIn() {
  return (
    <form action={googleSignInAction}>
      <GoogleButton />
    </form>
  );
}

function GoogleButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Redirecting..." : "Google Sign In"}
    </button>
  );
}
