import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import getdonation from './routes/donation.js';


const app = express();

app.use(cors({
    credentials:true
  }));
app.use(bodyParser.json());
app.use(express.json());


const CONNECTION_URL = "mongodb+srv://hullad:hullad6202@hullad.jrqucq7.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;


app.use('/',getdonation);

mongoose.set("strictQuery", false)
mongoose.connect(CONNECTION_URL,{
    useNewUrlParser:true , useUnifiedTopology:true
}).then(()=>app.listen(PORT,()=>console.log(`connection is established and running on port: ${PORT}`))).catch((err)=>
console.log(err.message));







