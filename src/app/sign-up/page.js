<<<<<<< HEAD
import ButtonSignup from "@/components/BUTTONAPP/ButtonSignup";
import InputSignup from "@/components/layouts/INPUT-CONTAINER/InputSignup";
=======
import InputLogin from "@/components/layouts/INPUT-CONTAINER/InputLogin";
>>>>>>> origin/main
import NavAuth from "@/components/layouts/NAV/NavAuth";

export default function Signup() {
  return (
<<<<<<< HEAD
    <div className="flex flex-col items-center h-[100svh]">
      <NavAuth />
      <main className=" h-[100%] w-[100%] bg-vermelho">
        <section className="flex items-center justify-center mt-[25%]">
          <InputSignup />
        </section>
=======
    <div className=" flex h-[100vh] bg-vermelho text-center items-start grid flex-row">
      <NavAuth />
      <main className="bg-[white] rounded-2xl h-[70%]">
        <h1>Cadastre-se</h1>
        <InputLogin />
>>>>>>> origin/main
      </main>
    </div>
  );
}

// uiverse.io
