import ButtonSignup from "@/components/BUTTONAPP/ButtonSignup";
import InputSignup from "@/components/layouts/INPUT-CONTAINER/InputSignup";
import NavAuth from "@/components/layouts/NAV/NavAuth";

export default function Signup() {
  return (
    <div className="flex flex-col items-center h-[100svh]">
      <NavAuth />
      <main className=" h-[100%] w-[100%] bg-vermelho">
        <section className="flex items-center justify-center mt-[25%]">
          <InputSignup />
        </section>
      </main>
    </div>
  );
}

// uiverse.io