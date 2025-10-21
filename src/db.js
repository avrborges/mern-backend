import mongoose from "mongoose"

export const connectDB = async () => {
    try{
        await mongoose.connect('mongodb+srv://avrborges_db_user:708v71Nad1uh6MAP@designdb.w9amtyg.mongodb.net/?retryWrites=true&w=majority&appName=DesignDB')
        console.log(">>>> DB conectado <<<<<")
    } catch(error) {
        console.error(error)
    }
}
