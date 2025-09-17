"use client";
import Input from "@/app/Shared/ui/input";
import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import type { ChangeEvent } from "react";

const CREATE_USER = gql`
    mutation create($title:String!,$description:String!) {
  create(title: $title,description: $description) {
    id,
    title,
    description
  }
} 
`

const TodoForm = () => {
    const [create, { loading, data }] = useMutation(CREATE_USER)
    console.log(data);
    
    const [formdata, setFormdats] = useState({
        title: "",
        description: "",
        // password: ""
    })
    const HandleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.name, e.target.value);
        const name = e.target.name
        const value = e.target.value

        setFormdats({ ...formdata, [name]: value })
    }

    const register = async () => {
        try {
            const response = await create({ variables: {...formdata} })
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="w-[800px] py-4 px-6 mx-auto">
                <h1 className="text-center text-black text-2xl">Todo Page</h1>
                <Input inputname="title" placeholder="title" inputType="text" changeInput={HandleInputChange} inputClass="w-full mt-3 px-3 py-4 border-gray-400" />
                <Input inputname="description" placeholder="description" inputType="text" changeInput={HandleInputChange} inputClass="w-full mt-3 px-3 py-4 border-gray-400" />
                {/* <Input inputname="password" placeholder="Password" inputType="password" changeInput={HandleInputChange} inputClass="w-full mt-3 px-3 py-4 border-gray-400" /> */}
            </div>
            <button onClick={register}>{loading?"loading":"Signup"}</button>
        </>
    )
}

export default TodoForm