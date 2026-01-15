import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import path from 'path';
import {connectDB} from './lib/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { app,server} from './lib/socket.js';

dotenv.config();
const PORT=process.env.PORT||3000;
// not using this app as socket server is introduced 
// const app=express();

const __dirname = path.resolve();

app.use(express.json({limit:"5mb"}));//to parse json data
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));
app.use(cookieParser());//to parse cookies  


app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);

//make ready for deployment
console.log("NODE_ENV =", process.env.NODE_ENV);

if(process.env.NODE_ENV=== "production"){
    app.use(express.static(path.join(__dirname,'../../frontend/dist')));
    app.use((_, res, next) => {
        if (req.method !== "GET") return next();
        if (req.path.startsWith("/api")) return next();
        res.sendFile(path.join(__dirname,'../../frontend','dist','index.html'));
    });
}

// app.listen(PORT,()=>{
//     console.log('Server is running on port 3000 ');
//     connectDB();
// })

server.listen(PORT,()=>{
    console.log('Server is running on port 3000 ');
    connectDB();
})