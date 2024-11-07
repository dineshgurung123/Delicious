import express from "express";
import mongoose from "mongoose";

const foodSchema = mongoose.Schema({

 name : String,
 price : Number,
 img  : String

})

const Food = mongoose.model("Food", foodSchema)

export default Food