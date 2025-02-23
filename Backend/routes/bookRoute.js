import express, { json } from "express";
import Book from "../models/book.js";
import authMiddleware from "../middleware/checkAuth.js"

const router = express.Router();

router.post("/add", authMiddleware, async (req, res) => {
    const { title, author, description, price, status } = req.body;

    try{
        const book = new Book({
            title:title,
            author,
            description,
            price,
            seller:req.user.id,
            status
        });
        console.log(book)
        await book.save();
        res.status(201).json({message:"Book added successfully"});
    } catch(error){
        res.status(500).json({error:error})
    }
});

router.get("/", async (req, res)=>{
    try{
        const books = await Book.find({status:"available"})
        console.log(books)
        res.json(books);
    } catch(error){
        res.status(500).json({error:"Error in fetching books"});
    }
});

router.put("/buy/:id", authMiddleware, async (req, res)=>{
    try{
        const book = await Book.findById(req.params.id);

        if(!book || book.status!='available'){
            return res.status(400).json({message:'Book not available'})
        }

        book.status='sold';
        await book.save();
        res.json({message:"Book purchased successfully",book});

    } catch(error){
        res.status(500).json({error:"Error in purchasing book"})
    }
});

router.put("/donate/:id", authMiddleware, async (req, res)=>{
    try{
        const book = await Book.findById(req.params.id);

        if(!book || book.status != "available"){
            return res.status(400).json({message: "book not available"});
        }

        book.status = "donated";
        await book.save();
        res.json({message:"Book donated successfully"});
    } catch(error){
        res.status(500).json({error:"Error donating book"})
    }
})

export default router