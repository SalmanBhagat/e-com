import Button from '../../../Components/Buttons/Button'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from '../../../core/schema/Register.schema';

const registerSchema = schema;

function Register() {

  const {register, handleSubmit, formState: {errors}} = useForm({resolver: zodResolver(registerSchema)});

  const onsubmit = (data) => {
    console.log(data);
  } 

  return (
    <div className="bg-secondary">
      {/* Top Bar Title */}
      <div className="bg-primary w-full h-[200px]">
        <h2 className="text-[28px] text-center text-white pt-[40px] leading-[125%]">
          Create your <br /> account
        </h2>
      </div>
      {/* Form */}
      <form className="mb-6" onSubmit={handleSubmit(onsubmit)}>
        <div className="max-w-[335px] mx-auto mt-[-60px] bg-white p-[30px] rounded-[40px] shadow-[0px_20px_40px_0px_#E68B8A0F] backdrop-blur-[25px]">
          <h4 className="text-[20px] mb-[14px] leading-[145%]">
            Welcome back! Please enter your details
          </h4>
          {/* Form Group */}
          <div className="mb-[17px] flex flex-col">
            <label className="text-[15px]">
             Name<span className="text-danger">*</span>
            </label>
            <input
            {...register("name")}
              type="text"
              className="border border-gray rounded-[10px] p-3 h-[48px] focus:outline-none"
            />
            {/* Validation Error Tag Show*/}
            {
              errors.name && (
                <p className='text-red-600 mt-2 text-[14px]'>
                  {errors.name.message}
                </p>
              )
            }
          </div>
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
            {
              errors.email && (
                <p className='text-red-600 mt-2 text-[14px]'>
                  {errors.email.message}
                </p>
              )
            }
          </div>
          <div className="mb-[17px] flex flex-col">
            <label className="text-[15px]">
              Mobile Number<span className="text-danger">*</span>
            </label>
            <div className="flex gap-3">
              <select {...register("country_code")} className='border border-gray rounded-[10px] p-3 h-[48px] focus:outline-none'>
              <option value="91">+91</option>
              <option value="92">+92</option>
              <option value="93">+93</option>
            </select>
            <input
            {...register("phone")}
              type="number"
              className="w-full border border-gray rounded-[10px] p-3 h-[48px] focus:outline-none"
            />
            </div>
              {/* Validation Error Tag Show*/}
            {
              errors.phone && (
                <p className='text-red-600 mt-2 text-[14px]'>
                  {errors.phone.message}
                </p>
              )
            }
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
            {
              errors.password && (
                <p className='text-red-600 mt-2 text-[14px]'>
                  {errors.password.message}
                </p>
              )
            }
          </div>
          <div className="mb-[28px]">
            <div className="flex items-center gap-2">
            <input type="checkbox" className='w-[20px] h-[20px]' {...register("checkbox")}/>
            <label className='text-[15px]'>I agree to all Term, Privacy and Fees</label>
            </div>
            {/* Validation Error Tag Show*/}
            {
              errors.checkbox && (
                <p className='text-red-600 mt-2 text-[14px]'>
                  {errors.checkbox.message}
                </p>
              )
            }
          </div>
        </div>
          {/* Button Sign In */}
          <div className="flex items-center justify-center mt-[-30px] relative z-99">
            <Button children="Sign Up" type="submit" variant="primary" isShowIcon={true}></Button>
          </div>
      </form>
            <div className="text-center mb-2">
              <Link to={"/login"}>Already have and account?___</Link>
            </div>
    </div>
  )
}

export {Register}