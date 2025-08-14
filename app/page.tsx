import { signIn } from "@/auth";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <h1 className="bg-amber-50 text-4xl">TEST</h1>
    <form action={async () =>{
      "use server"
      await signIn("google")
    }}>
      <button type="submit">Signin with Google</button>
    </form>
   </div>
  );
}
