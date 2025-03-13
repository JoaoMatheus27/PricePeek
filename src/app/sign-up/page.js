import InputLogin from "@/components/layouts/INPUT-CONTAINER/InputLogin";
import NavAuth from "@/components/layouts/NAV/NavAuth";

export default function Signup() {
  return (
    <div className=" flex h-[100vh] bg-vermelho text-center items-start grid flex-row">
      <NavAuth />
      <main className="bg-[white] rounded-2xl h-[70%]">
        <h1>Cadastre-se</h1>
        <InputLogin />
      </main>
    </div>
  );
}

// uiverse.io