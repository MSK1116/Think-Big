import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import eventReg from "../backend/route/event.route.js";
import cors from "cors";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 1000;
const MONGOURI = process.env.MONGODBURI;

try {
  mongoose.connect(MONGOURI);
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("failed", error);
}

app.get("/", (req, res) => {
  res.send("Hello hacker");
});

app.use("/eventReg", eventReg);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
