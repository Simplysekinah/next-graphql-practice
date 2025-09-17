import { todomodel } from "../database/model/todo.model"

export const Todoresolvers = {
    Query:{
        Todos:async()=>{
            try {
                const allTodo = await todomodel.find()
                return allTodo
            } catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message)
                }
            }
        },
        // oneuser:async(_:any,{id}:{id:string})=>{
        //     try {
        //         const existuser = await todomodel.find({id})
        //         if(existuser){
        //             // throw new Error("All the field are mandatory")
        //             return existuser
        //         }
        //     } catch (error) {
        //         if (error instanceof Error) {
        //             throw new Error(error.message)
        //         }
        //     }
        // }
    },
    Mutation:{
        create:async(_:any,{title,description}:{title:string,description:string})=>{
            try {
                if(!title||!description){
                    throw new Error("All the field are mandatory")
                }
                // console.log("working");
                
                const newtodo = await todomodel.create({title,description})
                // console.log("working2");

                return newtodo
            } catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message)
                }
            }
        }
    }
}