import express from "express";
import { eventReg } from "../controller/event.controller.js";

const router = express.Router();

router.post("/", eventReg);

export default router;
