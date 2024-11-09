import express from "express"
import mongoose from "mongoose";

const foodSchema = mongoose.Schema({

 name : String,
 price : Number,
 description: String,
 img  : String

})

const Food = mongoose.model("Food", foodSchema)

export default Food 