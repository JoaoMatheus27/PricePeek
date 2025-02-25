import React from "react";
import Image from "next/image";
import logoPricePeek from "../../../../public/img/logoPricePeek.svg";
import user from "../../../../public/img/user.png";

export default function NAVBAR() {
  return (
    <div className= "flex items-center px-5  flex-row justify-between justify-between">
        <Image src={logoPricePeek} alt="logo" />
        <Image src={user} alt="user" />
    </div>
  );
};
