import z from "zod/v3"

export const userSchema = z.object({
    name:z.string().min(3,{message:"Name cannot be less than 3 character"}).trim().optional(),
    email:z.string().email({message:"Please enter a valid email"}).trim(),
    password:z.string().min(8,{message:"Name cannot be less than 3 character"})
    .regex(/[a-zA-Z]/,{message:"Contain at least one character"})
    .regex(/[0-9]/,{message:"Contain at least one number"})
    .regex(/[a-zA-Z0-9]/,{message:"Contain at least one special character"})
    .trim()
})

export type userInput = z.infer<typeof userSchema>