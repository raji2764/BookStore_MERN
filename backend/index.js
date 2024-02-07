import express from "express";
import { PORT,mongodb_URL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app=express();

app.use(express.json());

//Middlewrae for handling CORS policy
//Op1:Allow all origins with default of cors(*).
app.use(cors());

//Op2:Allow custom origins.
// app.use(
//     cors({
//          origin:'http://localhost:3000',
//         methods:['GET','POST','PUT','DDELETE'],
//         allowedHeaders:['Content-Type'],
//     })
// ) 

app.use('/books',booksRoute);

/*route handler for the root path ("/") in an Express.js application. When a GET request is made to the root path, it will log the req object and send a response with a status code of 234 and the message 'Welcome To Book Store'.*/ 
app.get('/',(req,res)=>{
    console.log(req);
    return res.status(234).send('Welcome To Book Store');
});


//connecting to the database of mongodb_atlas
mongoose.connect(mongodb_URL)
.then(()=>{
    console.log(`App is connected to Database`);
    app.listen(PORT,()=>{
        console.log(`App is listening to port:${PORT}`);
    }
    );
})
.catch((error)=>{
    console.log(error);
}); 

