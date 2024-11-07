
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
const app = express()


dotenv.config()

const PORT = process.env.PORT || 3000
const URI = process.env.MongoDBURI

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