import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import connectToDB from "./config/mongodb.js";


const app = express();
const port = process.env.PORT || 8000
connectToDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true }));

app.get("/", (req, res) => {
    res.send("Welcome to the server");
});

app.listen(port, () => {
    console.log(`server run on port : ${port}`);
    console.log(`http://localhost:${port}`);
});
