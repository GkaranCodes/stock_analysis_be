import express from "express";
import "dotenv/config.js"
import dbConnect from "./db/dbConnect.js";
import { createAnalysis, deleteAnalysis, editAnalysis, getAnalysis } from "./controller/analysis.controller.js";
import cors from "cors";

dbConnect();

const app = express();

app.use(express.json());
app.use(cors());

// routes

app.get("/testing", (req, res)=>{
    res.status(201).json({name:"karan kumar"});
})

app.post("/create-analysis", createAnalysis);
app.get("/get-analysis", getAnalysis);
app.delete("/delete-analysis", deleteAnalysis);
app.put("/edit-analysis", editAnalysis);

app.listen(process.env.PORT, ()=> console.log("Server running at 8080"));