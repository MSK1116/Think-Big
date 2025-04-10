import express from "express";
import { subscriberReg } from "../controller/subscriber.controller.js";

const router = express.Router();

router.post("/", subscriberReg);

export default router;
