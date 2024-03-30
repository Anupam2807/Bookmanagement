import express from "express"
import "./Connection/connection.js"
import cors from "cors"
import Books from "./models/bookModel.js";

import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());




app.get("/books",async (req,res)=>{
   
    try{
       const books=  await Books.find()
       res.status(200).json({books});

    }catch(error){
        console.log("error");
    }
})
// get with id
app.get("/books/:id",async (req,res)=>{
   const id = req.params.id;
       try{
       const books=  await Books.findById(id);
       res.status(200).json({books});

    }catch(error){
        console.log("error");
    }
})
// update books with id

app.put("/update/:id",async (req,res)=>{
    const id = req.params.id;
    const {name,description,author,image,price}=req.body;
    try{
        const books=  await Books.findByIdAndUpdate(id,{name,description,author,image,price});
        await books.save().then(()=> res.sendStatus(200).json({message:"data updated"}));
        res.status(200).json({books});
 
     }catch(error){
         console.log("error");
     }
})


app.post("/add", async (req,res)=>{
    try{
        const data = req.body;
        const newBook = new Books(data);
        await newBook.save().then(()=>{
            res.status(200).json({message:"book added successfully"})
        })
    }
    catch(error){
        res.json("error occured")
    }
})

app.delete("/delete/:id",async (req,res)=>{
    const id = req.params.id;
    try{
        const books = await Books.findByIdAndDelete(id);
        if(!books){
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(books);

    }catch(error){
        res.json("Error happend in deleting");
    }
})


app.get("/",(req,res)=>{

})

app.listen(process.env.PORT,()=>{
    console.log("app working")
})