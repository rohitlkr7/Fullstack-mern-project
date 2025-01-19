import React from 'react'
import { Link } from 'react-router-dom'

const Recover = () => {
  return (
    <>
      <section className='border-2 mx-10 mt-1' >
         <div className='outline-none container mx-auto mt-14  max-w-md   gap-8 w-full '>
            <h1 className='text-center text-3xl font-serif uppercase'>Reset your password</h1>
            <h3 className='text-center uppercase mt-4'>We will send you an email to reset your password</h3>
            <form action="">
                <div className='mb-8 mt-10'>
                    <div className='' >
                        <label htmlFor="">Email :</label>
                    </div>
                    <input className="outline-none w-full " type="Email" required/>
                    <div className="w-full h-0.5 bg-black font-extrabold"></div>
                </div>
                <div className=" ">
                   <button className=' bg-black text-white py-2 px-4 mx-auto block rounded-full hover:bg-orange-700 hover:scale-105 '>SUBMIT</button>
                </div>

                <Link to={"/Login"}>
                   <h3 className='uppercase text-center my-10'>CANCEL</h3>
                </Link>

            </form>
         </div>
      </section>
    </>
  )
}

export default Recover
