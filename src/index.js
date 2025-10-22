import app from "./app.js"
import { connectDB } from "./db.js"
import dotenv from "dotenv"


connectDB();

app.listen(4000)
console.log("Servidor corriendo en el puerto", 4000 )