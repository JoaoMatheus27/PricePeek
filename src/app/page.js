import Image from "next/image";
import Bg from "../../public/img/bg.png";
import BUTTONAPP from "../components/BUTTONAPP/button.jsx";

export default function Home() {
  return (
    <main className="h-[100%]">
      <section className="h-[53svh]   bg-[url('/img/bg.png')]  bg-black opacity-90 bg-cover   bg-no-repeat sm:bg-cover sm:bg-no-repeat sm:bg-center md:bg-cover md:bg-center-center">
        <p className="font-julius text-white font-thin text-3xl text-900  flex items-center justify-center h-[5svh] px-5 ">
          Compare seus produtos e compre barato e com confiança
        </p>
      </section>

      <section className="min-h-max bg-[#7B0D0D]">
        <p className="text-center text-white font-inter">
          Pesquise produtos e os compare!
        </p>
        {/* input */}
        <div className="relative w-full flex justify-center space-x-5 flex-wrap p-5">
          <input
            className=" font-inter px-5 rounded-full w-[30svh] h-[6svh] outline-none opacity-50 "
            placeholder="Pesquise aqui..."
          ></input>
          <i className="fas fa-search fixed left-[32svh] top-[68.7%] opacity-50 text-black"></i>
        </div>
        {/* botao pesquisar */}
        <div className="w-full flex justify-center space-x-5 flex-wrap p-5">
          <button className="relative bg-[#222222] text-white rounded-2xl w-[30vw] -full sm:w-[45%] md:w-[15vw] h-[6vh] font-inter">
            Pesquisar
          </button>
        </div>
        <p className="text-center text-white font-inter text-2xl font-light ">
        Instale nosso App
        </p>
        {/* botao apps */}
        <BUTTONAPP />
      </section>
    </main>
  );
}
