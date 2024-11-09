
import express, { json } from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import Food from './Model/food.model.js'
import Cors from 'cors'

const app = express()
app.use(express.json())
app.use(Cors())

dotenv.config()

const PORT = process.env.PORT || 3000
const URI = process.env.MongoDBURI



app.get("/", async(req, res)=>{
  
    try {
        
     const food = await Food.find()
      
     res.status(200).json({
        message : "Food fetched successfully",
        data : food
     })

    } catch (error) {
        
        console.log(error)
    }

})


app.post("/", async(req, res)=>{


    const {name, price, description, img}=   req.body
  await  Food.create({

       name,
       price,
       description,
       img

    })
     res.status(200).json({
        message : "Food creation api hit successfully"
     })
   

})












//moongodb connect

try {
    
mongoose.connect(URI)
console.log("DB connected")
} 

catch (error) {
    
    console.log("Error", error)
}



app.listen(PORT, ()=>{
    console.log(`server runnning on port ${PORT}`)
})