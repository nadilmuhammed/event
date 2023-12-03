import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose"
import bodyParser from "body-parser";
import morgan from "morgan";
import router from "./routes/traine.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("common"));
app.use(bodyParser.urlencoded({ extended: false }));

dotenv.config();

app.use("/api/admin" , router);


const connect = async(req,res) =>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected");
    } catch (error) {
        console.log(error.message);
    }
}

app.listen(process.env.PORT, () =>{
    connect()
    console.log(`Server is running on port ${process.env.PORT}`);
})

