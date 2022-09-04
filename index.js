import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/volunteer.js';

const app = express();
app.use('/volunteer',router)


app.use(cors());
app.use(bodyParser.json());

const CONNECTION_URL = "mongodb+srv://aditisharma:aditi6202@cluster0.lynzny4.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;



mongoose.connect(CONNECTION_URL,{
    useNewUrlParser:true , useUnifiedTopology:true
}).then(()=>app.listen(PORT,()=>console.log(`connection is established and running on port: ${PORT}`))).catch((err)=>
console.log(err.message));