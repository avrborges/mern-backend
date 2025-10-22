import app from "./app.js"
import { connectDB } from "./db.js"
import dotenv from "dotenv"


connectDB();

const PORT = process.env.PORT || 3001

app.listen(PORT)
console.log("Servidor corriendo en el puerto", PORT )