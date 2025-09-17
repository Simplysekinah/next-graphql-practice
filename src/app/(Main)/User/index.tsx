"use client"
import React from "react";
import { useQuery } from "@apollo/client";
import {gql} from "@apollo/client";
import Loading from ".";

const GET_USERS = gql`
    query getalluser{
        users{
            id,
            email,
            name
        }
    }
`

type User={
    id:string
    email:string
    name:string
    password?:string
}

const UserDetails = () =>{
    const {data,loading,error} = useQuery(GET_USERS)
    console.log(data);
    if (loading) {
        // return "Loading"
        return Loading
    }
    if (error) {
        // return <h1>{error.message}</h1>
        return new Error(error.message)
    }
    return(
        <>
            {
                data.users?.map((user:User, index:number)=>(
                    <>
                    <div key={index}>
                        <h1>{user.name}</h1>
                    </div>
                    </>
                ))
            }
        </>
    )
}

export default UserDetails