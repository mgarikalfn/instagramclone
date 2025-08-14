import { trim, z } from "zod";

export const SignInFormSchema = z.object({
  email: z.email({ message: "Invalid email address" }).trim(),
  password: z
    .string()
    .min(8, { message: "password must be at least 8 characters" })
    .trim(),
});

export const SignupFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be atleast 2 characters long" })
    .trim(),
  email: z.email({ message: "please enter a valid email" }).trim(),
  password: z
    .string()
    .min(8, { message: "Be at least 8 characters long" })
    .trim(),
});
