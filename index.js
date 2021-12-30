import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

//routes
import postRoutes from './routes/posts.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json({limit:"30mb", extended: true}));
app.use(express.json({limit:"30mb", extended: true}));
app.use(cors());

app.get('/', (req, res)=>{
    res.send("Welcome to Memories Application")
})

app.use('/posts', postRoutes);


mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology: true}) //not required but to avoid errors
        .then(()=>app.listen(PORT, ()=>{console.log(`Server running and connected to mongo on PORT: ${PORT}`)}))
        .catch((error)=>console.log(error));
//mongoose.set('useFindAndModify', false); //not supported in new version