import React, { useState } from "react";


const Register = () => {
       const [data, setdata] = useState({
          FirstName : "",
          LastName  : "",
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
        <div className="outline-none container mx-auto mt-14  max-w-md   gap-5 w-full ">
          <h1 className="text-center text-2xl font-serif uppercase">Create account</h1>
          <form action="" onSubmit={handleSubmit}>
            <div className="mb-8 mt-8">
              <div className="">
                <label htmlFor="">FIRST NAME :</label>
              </div>
              <input 
                onChange={handleOnChange}
                name="FirstName"
                value={data.FirstName}
                className="outline-none w-full " 
                type="text" 
                required 
              />
              <div className="w-full h-0.5 bg-black font-extrabold"></div>
            </div>

            <div className="mb-8 mt-8">
              <div className="">
                <label htmlFor="">LAST NAME :</label>
              </div>
              <input  
               onChange={handleOnChange}
               name="LastName"
               value={data.LastName}
               className="outline-none w-full "
               type="text" 
               required/>
              <div className="w-full h-0.5 bg-black font-extrabold"></div>
            </div>
            <div className="mb-8 mt-8">
              <div className="">
                <label htmlFor="">EMAIL :</label>
              </div>
              <input 
               onChange={handleOnChange}
               name="email"
               value={data.email}
               className="outline-none w-full " 
               type="email" 
               required 
               />
              <div className="w-full h-0.5 bg-black font-extrabold"></div>
            </div>

            <div className="w-full">
              <div className="">
                <label htmlFor="">PASSWORD :</label>
              </div>
              <div className="flex ">
                <input 
                onChange={handleOnChange}
                name="password"
                value={data.password}
                className="outline-none w-full" 
                type="password" 
                required />
              </div>
              <div className="w-full h-0.5 bg-black font-extrabold"></div>
            </div>

           

            <div className=" mt-6 mb-2">
              <button className=" bg-black text-white py-2 px-4 mx-auto block rounded-full hover:bg-orange-700 hover:scale-105 ">
                CREATE
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
