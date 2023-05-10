import Image from "next/image";
import React from "react";
import AuthForm from "./components/AuthForm";
import Button from "../components/Button";
function page() {
  return (
    <div className="flex flex-col min-h-screen  justify-center items-center bg-gray-100">
      <div>
        <Image alt="logo" src={"/images/logo.png"} height={"50"} width={"50"} />
      </div>
      <h1 className="text-3xl font-semibold mt-5 tracking-tighter text-gray-900">
        Sign in to your account!
      </h1>
      <AuthForm/>
      
    </div>
  );
}

export default page;
