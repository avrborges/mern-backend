import express from "express"
import morgan from "morgan"
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.router.js"
import tareaRoutes from "./routes/taera.router.js"

dotenv.config();

const app = express();

app.use(morgan("dev"))
app.use(express.json())
app.use(cookieParser());

app.use('/api/auth',authRoutes);
app.use('/api',tareaRoutes);

export default app;