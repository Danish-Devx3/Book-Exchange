import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";


const router = express.Router();

router.post("/register", async (req, res)=>{
    const {name, email, password, location, role} = req.body;

    let user = await User.findOne({email});

    if(user) return res.status(400).json({message:"User already exists"});

    const hashedPassword = await bcrypt.hash(password, 10);

    user = new User({name, email, password:hashedPassword, location, role});
    await user.save();

    res.status(201).json({message:"User registered successfully"});
})


router.post("/login", async (req, res) =>{
    const {email, password} = req.body;

    let user = await User.findOne({email});
    if(!user) return res.status(400).json({message:"Invalid credential"});

    const token = jwt.sign({id:user._id},"danish");
    res.json({token,user})
})
export default router