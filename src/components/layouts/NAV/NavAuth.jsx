import React from "react";
import Image from "next/image";
import logoPricePeek from "../../../../public/img/logoPricePeek.svg";

export default function NavAuth() {
  return (
      <div className= "flex items-center justify-center clip-custom  w-[100%] xl:h-[12%]">
        <Image src={logoPricePeek} alt="logoPricePeek" />
      </div>  
  );
};
''