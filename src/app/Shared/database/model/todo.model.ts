import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true,unique:true},
    completed:{type:Boolean,default:false}
},{timestamps:true})

export const todomodel = mongoose.models.Todos || mongoose.model("Todos",todoSchema)