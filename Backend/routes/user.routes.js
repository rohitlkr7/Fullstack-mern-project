import express from 'express'
import bcrypt, { hash } from 'bcrypt'
import UserModel from '../Models/user.model';

const userRouter =express.Router();

userRouter.post("/register",(req,res) =>{
   const {firstName ,lastName , email ,password } =req.body
   try {
        
       if(!firstName){
        throw new error (error.message)
       }
       if(!lastName){
        throw new error (error.message)
       }
       if(!email){
        throw new error(error.message)
       }
       if(!password){
        throw new error(error.message)
       }
     if(user){
        console.log("User user  already exist")
     }


       bcrypt.hash(password, 5 ,async(err ,hash)=>{
        if(err){
            return res.status(500).json()
        }
       })


   } catch (error) {
    
   }

})


userRouter.post("/login",(req,res)=>{



})




export default userRouter;