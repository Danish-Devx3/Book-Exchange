import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title:{type:String, required:true},
    author:{type:String, required:true},
    description:{type:String},
    price:{type:Number,required:true},
    seller:{type:mongoose.Schema.Types.ObjectId, ref:"User", required:true},
    status:{type:String, enum:["available", "sold","donated"], default:"available"},
})

const Book = mongoose.model("Book", bookSchema);
export default Book;