import NavAuth from "@/components/layouts/NAV/NavAuth";
import InputLogin from "@/components/layouts/INPUT-CONTAINER/InputLogin"

export default function Login() {
  return (
      <div className="flex flex-col items-center h-[100svh] ">
        <NavAuth />
        <main className=" h-[100%] w-[100%] bg-vermelho ">
          <section className="flex items-center justify-center mt-[5%] ">
            <InputLogin />
            
          </section>
        </main>  
      </div>
  )
}

