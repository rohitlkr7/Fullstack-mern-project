
import express from 'express';
import dotenv from  'dotenv';
dotenv.config()
import cors from 'cors';
import ConnectDB from "./config/DB.js";


const app = express();

app.use(cors())

app.get("/",(req,res)=>{
    res.send("hello world")
})

const PORT = 8000 || process.env.PORT

app.listen(PORT,async()=>{
   try {
        await ConnectDB
        console.log(`server is runing on ${PORT} and db also connected `)
   } catch (error) {
      console.log("error in the server",error)
   }
})