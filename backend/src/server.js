import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
import cors from "cors";
import {connectDB} from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import chatRoutes from "./routes/chat.route.js";
import path from "path";


const app = express();
app.use(cookieParser());
const PORT = process.env.PORT;
const __dirname  = path.resolve();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true // allow front end to send the cookies
}));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("*", (req, res) =>{
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
        
    })
}

app.listen(PORT,() =>{
    console.log(`server is running on port ${PORT}`);
    connectDB()
});