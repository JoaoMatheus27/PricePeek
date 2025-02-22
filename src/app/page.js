import Image from "next/image";
import Bg from "../../public/img/bg.png";

export default function Home() {
  return (
    <main>
      <section className="h-[40svh]   bg-[url('/img/bg.png')] bg-black opacity-50 bg-cover bg-center-center bg-no-repeat">
        <p className="font-julius text-white font-thin text-3xl  flex items-center justify-center h-[5svh] px-5 ">
          Compare seus produtos e compre barato e com confiança
        </p>
      </section>

      <section className="max-h-[100%] bg-[#7B0D0D]">
        <p className="text-center text-white font-inter">
          Pesquise produtos e os compare!
        </p>
        {/* input */}
        <div className="relative top-[3svh] w-full max-w-sm flex items-center justify-center">
          <input
            className="font-inter px-5 rounded-full w-[30svh] h-[6svh] opacity-50 pl-10"
            placeholder="Pesquise aqui..."
          ></input>
          <i className="fas fa-search absolute left-[33svh] top-[5svh] transform -translate-y-1/2"></i>
        </div>
        {/* botao */}
        <button className="relative bg-[#222222] text-white rounded-2xl h-[6svh] w-[13svh] font-inter m-10 left-[11svh]">
          Pesquisar
        </button>
        <p className="text-center text-white font-inter text-2xl font-light ">
        Instale nosso App
        </p>
        <div className=" relative flex  right-[11svh] ">
        <button className="relative bg-[#222222] text-white rounded-full h-[6svh] w-[15svh] font-inter m-10 left-[12svh]">
          Apple store
        </button>
        <button className="relative bg-[#222222] text-white rounded-full h-[6svh] w-[15svh] font-inter m-10 left-[12svh]">
          Play store
        </button>
        </div>
      </section>
    </main>
  );
}
