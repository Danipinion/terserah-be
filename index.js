import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ReviewsRouter from "./routes/ReviewsRoute.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(ReviewsRouter);

app.listen(process.env.APP_PORT, () => {
	console.log(`Listening on port ${process.env.APP_PORT}`);
});
