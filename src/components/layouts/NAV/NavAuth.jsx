import React from "react";
import Image from "next/image";
import logoPricePeek from "../../../../public/img/logoPricePeek.svg";

export default function NavAuth() {
  return (
      <div className= "flex items-center justify-center clip-custom bg-[white] w-[100%]">
        <Image src={logoPricePeek} alt="logoPricePeek" />
      </div>  
  );
};
