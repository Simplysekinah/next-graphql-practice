import { success } from "zod"
import { usermodel } from "../database/model/user.model"
import jsonwebtoken from "jsonwebtoken"

export const Userresolvers = {
    Query:{
        users:async()=>{
            try {
                const alluser = await usermodel.find()
                return alluser
            } catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message)
                }
            }
        },
        oneuser:async(_:any,{id}:{id:string})=>{
            try {
                const existuser = await usermodel.find({id})
                if(existuser){
                    // throw new Error("All the field are mandatory")
                    return existuser
                }
            } catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message)
                }
            }
        }
    },
    Mutation:{
        createuser:async(_:any,{name,email,password}:{name:string,email:string,password:string})=>{
            try {
                if(!name||!email||!password){
                    throw new Error("All the field are mandatory")
                }
                // console.log("working");
                
                const newuser = await usermodel.create({name,email,password})
                // console.log("working2");

                return newuser
            } catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message)
                }
            }
        },
        loginuser:async(_:any,{email,password}:{email:string,password:string})=>{
            try {
                if(!email||!password){
                    throw new Error("All the field are mandatory")
                }
                const  existinguser = await usermodel.findOne({email})
                console.log(existinguser);
                if (existinguser && existinguser.password == password) {
                    const token = await jsonwebtoken.sign({email:existinguser.email},"secretkey")
                    return {user:existinguser,token}
                }
            } catch (error) {
                 if (error instanceof Error) {
                    throw new Error(error.message)
                }
            }
        }
    }
}