import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bulkMailer from "../backend/route/bulkMailer.route.js";
import eventReg from "../backend/route/event.route.js";
import subscriberReg from "../backend/route/subscriber.route.js";
import cors from "cors";

const app = express();
dotenv.config();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);
app.options("*", cors());

app.use(express.json());

const PORT = process.env.PORT || 1000;
const MONGOURI = process.env.MONGODBURI;

mongoose
  .connect(MONGOURI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.log("MongoDB connection failed:", error));

app.get("/", (req, res) => {
  res.send("Hello hacker");
});

app.use("/eventReg", eventReg);
app.use("/bulkMailer", bulkMailer);
app.use("/subscribe", subscriberReg);
