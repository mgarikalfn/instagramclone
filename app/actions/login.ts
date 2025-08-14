import { object } from "zod";
import { SignInFormSchema, SignupFormSchema } from "../lib/definitions";
import { error } from "console";
import { createSession } from "../lib/session";
import { redirect } from "next/navigation";

const testUser = {
  id: "1",
  email: "girum@gmail.com",
  password: "12345678",
};


 export async function  logIn(prevState:any , formData:FormData){
  const result = SignInFormSchema.safeParse(Object.fromEntries(formData));

  if(!result.success){
    return {
        error:result.error.flatten().fieldErrors
    }
  }

  const {email,password} = result.data;
  if(email !== testUser.email || password !== testUser.password){
    return {
        error:{
            email:["Invalid email or password"]
        }
    }
  }

 await createSession(testUser.id);
 redirect('/')
 }


 export async function signup(prevState:any,formData: FormData){
  const validateFields = SignupFormSchema.safeParse({
    name:formData.get('name'),
    email:formData.get('email'),
    password:formData.get('password')
  })

  if(!validateFields.success){
    return {
      errors:validateFields.error.flatten().fieldErrors
    }
  }
  return('/')
 }