import mongoose from "mongoose"

export const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            
            //useNewUrlParser: true,
            //useUnifiedTopology: true,

        })
        console.log(">>>> DB conectado <<<<<")
    } catch(error) {
        console.error("Error al conectarse a la base de datos",error);
        process.exit(1);
    }
}
