import Image from "next/image";
import Bg from "../../public/img/bg.png";
import Lupa from "../../public/img/lupa.png";
import BUTTONAPP from "../components/BUTTONAPP/button.jsx";
import NAVBAR from "../components/layouts/NAV/Navbar";
import Link from "next/link"

export default function Home() {
  return (
    <>
      <NAVBAR />
      <main className="h-[100%] ">
        <section className="flex items-center h-[65vh]   bg-[url('/img/bg.png')]  bg-black opacity-90 bg-cover   bg-no-repeat sm:bg-cover sm:bg-no-repeat sm:bg-center md:bg-cover md:bg-center-center md:break-normal">
          <p className=" font-julius text-white font-thin text-3xl h-[15svh] px-5 lg:text-5xl">
            Compare seus produtos <br></br> e compre barato e com confiança
          </p>
        </section>

        <section className="min-h-max bg-[#7B0D0D]">
          <p className="text-center text-white font-inter pt-5 md:text-lg lg:text-3xl">
            Pesquise produtos e os compare!
          </p>
          {/* input */}
          <div className="relative w-full flex m-0 justify-center space-x-5 flex-wrap p-5">
            <input
              className=" font-inter px-5 rounded-full w-[30svh] h-[6svh] ml-8 outline-none opacity-50 "
              placeholder="Pesquise aqui..."
            ></input>
            <Image
              src={Lupa}
              className="relative right-12 top-3 opacity-50 text-black w-5 h-5"
              alt="lupa"
            ></Image>
          </div>
          {/* botao pesquisar */}
          <div className="w-full flex justify-center space-x-5 flex-wrap p-5">
              
              <button className="relative bg-[#222222] text-white rounded-2xl w-[30vw] -full sm:w-[45%] md:w-[15vw] h-[6vh] font-inter lg:w-[15%] ">
              <Link href="./comparison"> Pesquisar</Link>
              </button>
          </div>
        </section>  
      </main>
    </>
  );
}
{/* //uiverse.io */}