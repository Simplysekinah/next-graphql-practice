"use client";
import { userInput, userSchema } from '@/app/Shared/types/schema'
import { useMutation } from '@apollo/client'
import { zodResolver } from '@hookform/resolvers/zod'
import gql from 'graphql-tag'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import type { ChangeEvent } from "react";
import { useRouter } from 'next/navigation';

const CREATE_USER = gql`
    mutation loginuser($email:String!,$password:String!) {
        loginuser(email: $email,password: $password) {
            user{
            id
            name}
            token
        }
    } 
`

const LoginDetails = () => {
    const router = useRouter()
    const [createuser, { loading, data }] = useMutation(CREATE_USER)
    const [formdata, setFormdats] = useState({
        email: "",
        password: ""
    })
    const HandleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.name, e.target.value);
        const name = e.target.name
        const value = e.target.value
        setFormdats({ ...formdata, [name]: value })
        console.log(formdata);
        
    }

    const Register = async () => {
        console.log(formdata);
        try {
            const { data } = await createuser({ variables: formdata })
            console.log(data);
            const response = await fetch("http://localhost:3000/api/setcookies", {
                method: "POST",
                body: JSON.stringify({ token: data.loginuser.token })
            })
            console.log(response);
            if (response.status == 200) {
                router.push("/Dashboard")
            }
        } catch (error) {
            console.log(error);
        }
    }

    const { formState: { errors }, handleSubmit, register } = useForm<userInput>({
        resolver: zodResolver(userSchema)
    })
    return (
        <>
            <div className="w-[800px] py-4 px-6 mx-auto">
                <h1 className="text-center text-black text-2xl">Signup Page</h1>
                <div >
                    <input type="text"
                        className="w-full mt-3 px-3 py-4 border-gray-400 border-1" name='email'
                        onChange={HandleInputChange}
                    />
                    {/* {errors.email && <small className="text-red-500">{errors.email.message}</small>} */}
                    <input type="text"
                        className="w-full mt-3 px-3 py-4 border-gray-400 border-1" name='password'
                        onChange={HandleInputChange}
                    />
                    {/* {errors.password && <small className="text-red-500">{errors.password.message}</small>} */}
                    <button  onClick={Register}>{loading ? "loading" : "Signup"}</button>
                </div>
            </div>
        </>
    )
}

export default LoginDetails