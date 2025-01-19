import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoMdEyeOff } from "react-icons/io";

const Login = () => {
   const [showpassword, setshowpassword] = useState(false)
   const [data, setdata] = useState({
      email :"",
      password : ""
   })
    const handleOnChange = (e) =>{
      const {name ,value} = e.target

      setdata({
         ...data,
         [name] : value
      })
    }

    const handleSubmit = (e) =>{
         e.preventDefault()
    }

    console.log("login" , data)

    


  return (
    <>
      <section className='border-2 mx-10 mt-1'> 
         <div className='outline-none container mx-auto mt-14  max-w-md   gap-5 w-full '>
            <h1 className='text-center text-2xl font-serif'>LOG IN</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className='mb-8 mt-8'>
                    <div className='' >
                        <label htmlFor="">Email :</label>
                    </div>
                    <input 
                    onChange={handleOnChange}
                    name='email'
                    value={data.email}
                    className="outline-none w-full " 
                    type="email" 
                    required />
                    <div className="w-full h-0.5 bg-black font-extrabold"></div>
                </div>

                <div className='w-full'> 
                    <div className=''>
                        <label htmlFor="">Password :</label>
                    </div>
                    <div className='flex '>
                      <input
                       onChange={handleOnChange}
                       name='password'
                       value={data.password}
                       className='outline-none w-full' 
                       type={showpassword ? "text" : "password"}
                        required 
                        />
                      <div className='cursor-pointer text-xl'  onClick={()=>setshowpassword((preve)=>!preve)}>
                         <span>

                           {
                              showpassword ?(
                                 <IoMdEyeOff/>
                              )
                              :
                              (
                                 <FaEye/> 
                              )
                           }
                         </span>
                      </div>
                    </div>
                    <div className="w-full h-0.5 bg-black font-extrabold"></div>
                </div>

                <Link to={"/Recover"} className='hover:underline text-center '>
                   <h3 className='py-4 uppercase'>Forgot your password?</h3>
                </Link>

                <div className=" ">
                   <button className=' bg-black text-white py-2 px-4 mx-auto block rounded-full hover:bg-orange-700 hover:scale-105 '>SIGN IN</button>
                </div>

                <Link to={"/Register"}>
                   <h3 className='uppercase text-center my-10'>Create account</h3>
                </Link>

            </form>
         </div>
      </section>
    </>
  )
}

export default Login
