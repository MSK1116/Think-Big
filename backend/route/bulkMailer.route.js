import express from "express";

import { bulkMailer } from "../controller/bulkMailer.controller.js";

const router = express.Router();

router.post("/", bulkMailer);

export default router;
