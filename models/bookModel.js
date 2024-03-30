import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true}
    ,
    author:{type:String,required:true},
    image:{type:String},
    price:{type:Number,require:true}
})

const Books = mongoose.model("Books",bookSchema);
export default Books;