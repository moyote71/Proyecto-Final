import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

app.get("/",(req, res)=> {
    res.send("Welcome!");
});

app.listen(process.env.PORT, () => { 
    console.log(`Server running on http://localhost:${process.env.PORT}`);
});