import React from "react";
import Image from "next/image";
import logoPricePeek from "../../../../public/img/logoPricePeek.svg";
import user from "../../../../public/img/user.png";

export default function Navbar() {
  return (
    <div className= "flex items-center px-5  flex-row bg-[white] justify-between">
        <Image src={logoPricePeek} alt="logoPricePeek" />
        <a href="./sign-up"><Image src={user}  alt="USER" /></a>  
    </div>
  );
};
