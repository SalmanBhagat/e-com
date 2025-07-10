import z from "zod";

export const schema = z.object({
    name : z.string().min(2 , {message : "Please Enter Name"}),
    email : z.string().min(1 , {message : "Please Enter Valid email"}),
    country_code : z.string().min(1 , {message : "Please One Category Select"}),
    phone : z.string().min(10 , {message : "Please Enter Valid Mobile Number"}),
    password : z.string().min(2 , {message : "Please Enter Password"}),
    checkbox : z.literal(true ,{
        errorMap: () => ({message: "Agreement to all terms is required."})
    })
})