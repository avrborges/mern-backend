import mongoose from "mongoose"
import { MONGODB_URI } from "./config.js";

export const connectDB = async () => {
    try{
        await mongoose.connect(MONGODB_URI);        
        console.log(">>>> ✅ DB conectado <<<<<")
    } catch(error) {
        console.error("❌ Error al conectarse a la base de datos", error.message);
        process.exit(1); // Finaliza el proceso si no se puede conectar
    }
}
