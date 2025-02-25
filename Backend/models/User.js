import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    location:{type:String},
    role:{type:String, enum:["buyer", "seller"], default:"buyer" }
})

const User = mongoose.model("User", userSchema);
export default User;