import z from "zod";

export const schema = z.object({
    email : z.string().min(1 , {message : "Please Enter !Match email"}),
    password : z.string().min(2 , {message : "Please Enter Valid Password"}),
})