import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next)=>{
    const token = req.header("Authorization");

    if(!token) return res.statu(401).json({message:"Access Denied"});

    try{
        const decoded = jwt.verify(token, "danish");
        req.user = decoded;
        next()
    } catch (error) {
        res.status(400).json({message:"Invalid To"})
    }
}