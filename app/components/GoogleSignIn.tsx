"use client";

import { useFormStatus } from "react-dom";
import { googleSignInAction } from "../actions/googleauth";
import Button from "./ui/Button";

export default function GoogleSignIn() {
  return (
    <form action={googleSignInAction} className="bg-blue-300 p-4 text-white text-center font-semibold hover:bg-black hover:text-white hover:border-none transition">
      <GoogleButton />
    </form>
  );
}

function GoogleButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="">
      {pending ? "Redirecting..." : "Google Sign In"}
    </Button>
  );
}
