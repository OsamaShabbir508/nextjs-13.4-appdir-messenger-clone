"use client";
import Input from "@/app/components/Input";
import React from "react";
import { useState, useCallback } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

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
        <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
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
        </form>
      </div>
    </div>
  );
}

export default AuthForm;
