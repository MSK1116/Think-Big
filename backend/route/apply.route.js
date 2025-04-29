import express from "express";

import { applicationReg } from "../controller/apply.controller.js";

const router = express.Router();

router.post("/", applicationReg);

export default router;
