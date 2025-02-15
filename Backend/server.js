import express from'express';
import cors from 'cors';
import dotenv from 'dotenv';    
import connectDB from './config/db.js';
import authRoutes from "./routes/auth.js"
import bookRoute from "./routes/bookRoute.js"

dotenv.config();
const app = express()
const port = 3000

app.use(express.json());
app.use(cors());

connectDB();

app.use("/user",authRoutes);

app.use("/books", bookRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})