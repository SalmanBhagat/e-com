import Button from "../../../Components/Buttons/Button";
import { Link } from "react-router-dom";
import { loginSchema } from "../../../core/schema/Login.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = loginSchema;

function Login() {

  const {register, handleSubmit, formState: {errors}} = useForm({resolver: zodResolver(schema)})

  const onsubmit = (data) => {
    console.log(data);
  }

  return (
    <div className="bg-secondary">
      {/* Top Bar Title */}
      <div className="bg-primary w-full h-[200px]">
        <h2 className="text-[28px] text-center text-white pt-[40px] leading-[125%]">
          Welcome Back! <br /> Let's Get Started
        </h2>
      </div>
      {/* Form */}
      <form className="mb-6" onSubmit={handleSubmit(onsubmit)}>
        <div className="max-w-[335px] mx-auto mt-[-60px] bg-white p-[30px] rounded-[40px] shadow-[0px_20px_40px_0px_#E68B8A0F] backdrop-blur-[25px]">
          <h4 className="text-[20px] mb-[14px] leading-[145%]">
            Access Your Account and Explore More
          </h4>
          {/* Form Group */}
          <div className="mb-[17px] flex flex-col">
            <label className="text-[15px]">
              Email Address<span className="text-danger">*</span>
            </label>
            <input
              {...register("email")}
              type="email"
              className="border border-gray rounded-[10px] p-3 h-[48px] focus:outline-none"
            />
            {/* Validation Error Tag Show*/}
           <span className='text-red-600 mt-2 text-sm'>{errors.email ? errors.email.message : ""}</span>
          </div>
          {/* Form Group */}
          <div className="mb-[15px] flex flex-col">
            <label className="text-[15px]">
              Password<span className="text-danger">*</span>
            </label>
            <input
            {...register("password")}
              type="password"
              className="border border-gray rounded-[10px] p-3 h-[48px] focus:outline-none"
            />
            {/* Validation Error Tag Show*/}
            <span className='text-red-600 mt-2 text-sm'>{errors.password ? errors.password.message : ""}</span>
          </div>
          {/* Forgot Btn */}
          <div className="mb-[28px]">
            <a href="#" className="text-[15px] opacity-50 underline">
              Forgot Password?
            </a>
          </div>
        </div>
          {/* Button Sign In */}
          <div className="flex items-center justify-center mt-[-30px] relative z-99">
            <Button children="Sign In" type="submit" variant="primary" isShowIcon={true}></Button>
          </div>
      </form>
            <div className="text-center mb-2">
              <span>Not a member?</span> <Link to={"/auth/register"} className="font-medium underline">Create an account</Link>
            </div>
    </div>
  );
}

export { Login };
