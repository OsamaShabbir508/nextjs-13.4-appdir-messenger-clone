"use client";
import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import React from "react";
import { useState, useCallback } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { BsGithub } from "react-icons/bs";
import AuthSocialButton from "./AuthSocialButton";
type Variant = "LOGIN" | "REGISTER";

function AuthForm() {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const toogleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    if (variant === "LOGIN") {
    } else {
    }
  };
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md  ">
      <div className="bg-white mx-auto p-5 rounded-lg max-w-full">
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input
              id="name"
              label="Name"
              register={register}
              type="string"
              error={errors}
            />
          )}
          <Input
            id="email"
            label="Email"
            register={register}
            type="email"
            error={errors}
          />
          <Input
            id="password"
            label="Password"
            register={register}
            type="password"
            error={errors}
          />
          <Button fullWidth={true}>
            {variant === "LOGIN" ? "Log in" : "Sign Up"}
          </Button>
          <div className="flex flex-row justify-center items-center ">
            <div className="w-1/3 border-t border-gray-300 mr-2" />
            <span className="text-gray-400  text-xs ">Or Continue with</span>
            <div className="w-1/3 border-t border-gray-300 ml-2" />
          </div>
          <div className="mt-5 flex flex-row justify-between gap-3">
            <AuthSocialButton Icon={BsGithub} onClick={() => {}} />
            <AuthSocialButton Icon={BsGithub} onClick={() => {}} />
          </div>
          <div className="flex flex-row gap-2 justify-center">
            {variant === "LOGIN" ? (
              <>
                <span className="text-gray-400"> New here?</span>
                <span
                  className="text-gray-500 underline cursor-pointer"
                  onClick={toogleVariant}
                >
                  Create an account
                </span>
              </>
            ) : (
              <>
                <span className="text-gray-400">Already have an account</span>
                <span
                  className="text-gray-500 underline cursor-pointer"
                  onClick={toogleVariant}
                >
                  Login
                </span>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default AuthForm;
