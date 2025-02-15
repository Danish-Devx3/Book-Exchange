import express, { json } from "express";
import Book from "../models/book";
import authMiddleware from "../middleware/checkAuth.js"

const router = express.Router();

router.post("/add", authMiddleware, async (req, res) => {
    const {title, author, description, price, status} = req.body;

    try{
        const book = new Book({
            title,
            author,
            description,
            price,
            seller:req.user.id,
            status
        });

        await book.save();
        res.status(201).json({message:"Book added successfully"});
    } catch(error){
        res.status(500).json({error:"Error in adding book"})
    }
});

router.get("/", async (req, res)=>{
    try{
        const books = await Book.find({status:"available"}).populate("seller", "name", "email");
        res,json(books);
    } catch(error){
        res.status(500).json({error:"Error in fetching books"});
    }
});

export default router