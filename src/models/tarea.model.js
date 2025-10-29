import mongoose from "mongoose";

const tareaSchema = new mongoose.Schema({
titulo: {
    type: String,
    required: true,
    trim: true,
},
descripcion: { 
    type: String,
    required: true,
    trim: true,
},
fecha: {
    type: Date,
    required: true,
    default: Date.now,
},
usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
},
},  {
    timestamps: true
});

export default mongoose.model("Tarea", tareaSchema);
