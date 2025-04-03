import React from "react";
import Image from "next/image";
import logoPricePeek from "../../../../public/img/logoPricePeek.svg";
import user from "../../../../public/img/user.png";
import Link from "next/link"

export default function Navbar() {
  return (
    <div className= "flex items-center px-5  flex-row bg-[white] justify-between ">
        <Image src={logoPricePeek} alt="logoPricePeek" />
        <Link href="./sign-up"><Image src={user}  alt="USER" /></Link>  
    </div>
  );
};
