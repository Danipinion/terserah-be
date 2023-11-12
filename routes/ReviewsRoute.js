import express from "express";
import { getReviews, createReviews } from "../controllers/ReviewsController.js";

const router = express.Router();

router.get("/reviews", getReviews);
router.post("/reviews", createReviews);

export default router;
