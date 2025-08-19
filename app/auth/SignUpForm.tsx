"use client";

import React, { useActionState } from "react";
import { signup } from "../actions/login";

const SignUpForm = () => {
  const [state, action] = useActionState(signup, undefined);

  return (
    <form
      action={action}
      className="mx-auto mt-10 w-full max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-md"
    >
      <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800">
        Create Account
      </h2>

      {/* Name */}
      <div className="mb-4">
        <label
          htmlFor="name"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          placeholder="Your name"
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
        {typeof state === "object" && state?.errors?.name && (
          <p className="mt-1 text-sm text-red-500">{state.errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div className="mb-4">
        <label
          htmlFor="email"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
        {typeof state === "object" && state?.errors?.email && (
          <p className="mt-1 text-sm text-red-500">{state.errors.email}</p>
        )}
      </div>

      {/* Password */}
      <div className="mb-6">
        <label
          htmlFor="password"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
        {typeof state === "object" && state?.errors?.password && (
          <p className="mt-1 text-sm text-red-500">{state.errors.password}</p>
        )}
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
