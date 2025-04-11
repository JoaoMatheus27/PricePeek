import Image from "next/image";
import Lupa from "../../../public/img/lupa.png";
import NAVBAR from "../../components/layouts/NAV/Navbar";
import Footer from "@/components/layouts/FOOTER/Footer";
import ComparisonSquare from "@/components/comparisonSquare/ComparisonSquare"

export default function Home() {
  return (
    <>
      <NAVBAR />
      <main className="h-[100%] ">
        <section className="flex items-start justify-center h-[65vh]   bg-[#222222]  bg-black opacity-90 bg-cover   bg-no-repeat sm:bg-cover sm:bg-no-repeat sm:bg-center md:bg-cover md:bg-center-center md:break-normal">
          <p className=" font-julius mt-8 text-white font-thin text-3xl h-[15svh] px-5 lg:text-5xl">
            Pesquise seus produtos e os compare!
          </p>
        </section>

        <section className="min-h-max">
          <div>
            <ComparisonSquare />
          </div>
          <div>
            <ComparisonSquare />
          </div>
        </section>
      </main>
    </>
  );
}
{/* //uiverse.io */}