"use client";
import { userInput, userSchema } from "@/app/Shared/types/schema";
import Input from "@/app/Shared/ui/input";
import { gql, useMutation } from "@apollo/client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import type { ChangeEvent } from "react";
import { useForm } from "react-hook-form";

const CREATE_USER = gql`
    mutation createuser($name:String!,$email:String!,$password:String!) {
  createuser(name: $name,email: $email,password: $password) {
    id
    email
    name
  }
} 
`

const SignupForm = () => {
    const [createuser, { loading, data }] = useMutation(CREATE_USER)
    const [formdata, setFormdats] = useState({
        name: "",
        email: "",
        password: ""
    })
    const HandleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.name, e.target.value);
        const name = e.target.name
        const value = e.target.value

        setFormdats({ ...formdata, [name]: value })
    }

    const Register = async (data:userInput) => {
        console.log(data);
        try {
            const response = await createuser({ variables: data  })
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    const { formState:{errors},handleSubmit, register } = useForm<userInput>({
        resolver:zodResolver(userSchema)
    })
    // console.log(handleSubmit);
    // console.log(form);
    return (
        <>
            <div className="w-[800px] py-4 px-6 mx-auto">
                <h1 className="text-center text-black text-2xl">Signup Page</h1>
                <form action="" onSubmit={handleSubmit(Register)}>
                    <input type="text"
                    className="w-full mt-3 px-3 py-4 border-gray-400 border-1"
                    {...register("name")}
                     />
                     {errors.name && <small className="text-red-500">{errors.name.message}</small>}
                     <input type="text"
                     className="w-full mt-3 px-3 py-4 border-gray-400 border-1"
                    {...register("email")}
                     />
                     {errors.email && <small className="text-red-500">{errors.email.message}</small>}
                     <input type="text"
                     className="w-full mt-3 px-3 py-4 border-gray-400 border-1"
                    {...register("password")}
                     />
                     {errors.password && <small className="text-red-500">{errors.password.message}</small>}
                    <button type="submit">{loading ? "loading" : "Signup"}</button>
                </form>
                {/* <Input inputname="name" placeholder="Name" inputType="text" changeInput={HandleInputChange} inputClass="w-full mt-3 px-3 py-4 border-gray-400" />
                <Input inputname="email" placeholder="email" inputType="email" changeInput={HandleInputChange} inputClass="w-full mt-3 px-3 py-4 border-gray-400" />
                <Input inputname="password" placeholder="Password" inputType="password" changeInput={HandleInputChange} inputClass="w-full mt-3 px-3 py-4 border-gray-400" /> */}
            </div>
            {/* <button onClick={register}>{loading ? "loading" : "Signup"}</button> */}
            {/* <button onClick={register}>{loading?"loading":"Signup"}</button> */}
        </>
    )
}

export default SignupForm