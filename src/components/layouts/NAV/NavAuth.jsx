import React from "react";
import Image from "next/image";
import logoPricePeek from "../../../../public/img/logoPricePeek.svg";

export default function NavAuth() {
  return (
    <div className= "flex items-center px-5  flex-row bg-[red] justify-between">
        <Image src={logoPricePeek} alt="logoPricePeek" />
    </div>
  );
};
