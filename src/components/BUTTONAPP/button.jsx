import React from "react";

export default function BUTTONAPP() {
  return (
    <div className="w-full flex justify-center space-x-5 flex-wrap p-5">
      <button className="relative bg-[#222222] text-white rounded-full w-[30vw] sm:w-[30vw] md:w-[15vw] h-[6vh] font-inter">
      <i icon="fa-brands fa-google-play text-black" /> Apple store
      </button>
      <button className="relative bg-[#222222] text-white rounded-full w-[30vw] sm:w-[30vw] md:w-[15vw] h-[6vh] font-inter">
        Play store
      </button>
    </div>
  );
}
