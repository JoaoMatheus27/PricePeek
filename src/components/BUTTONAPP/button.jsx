import React from "react";
import Apple from "../../../public/img/app-store.webp";

export default function ButtonApp() {
  return (
    <div className="w-full flex justify-center space-x-5 flex-wrap p-5">
      <button className="relative bg-[url('/public/img/app-store.webp')] bg-cover rounded-full w-[30vw] sm:w-[30vw] md:w-[15vw] h-[6vh] font-inter"></button>
      <button className="relative bg-[url('/public/img/play-store.svg')] bg-cover rounded-full w-[30vw] sm:w-[30vw] md:w-[15vw] h-[6vh] font-inter"></button>
    </div>
  );
}
