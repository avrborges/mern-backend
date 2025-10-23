import app from "./app.js"
import { PORT, MONGODB_URI, TOKEN_SECRET } from "./config.js";
import { connectDB } from "./db.js"

async function main() {
    try {

        await connectDB();

        app.listen(PORT, () => {
        console.log(`✅ Servidor corriendo en el puerto ${PORT}`);
        });

    } catch (error) {
        console.error("Error al iniciar el servidor", error);
    }
}

main();