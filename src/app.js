import express from "express"
import morgan from "morgan"
import authRoutes from "./routes/auth.router.js"
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(morgan("dev"))
app.use(express.json())

app.use('/api/auth',authRoutes);

export default app;