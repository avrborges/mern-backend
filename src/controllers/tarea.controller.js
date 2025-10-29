import Tarea from "../models/tarea.model.js";

export const obtenerTareas = async (req, res) => {
    console.log('Obteniendo tareas');
    const tareas = await Tarea.find({
        usuario: req.usuario.id
    }).populate('usuario');
    res.json(tareas);
}

export const crearTarea = async (req, res) => {
    console.log('Creando tarea');
    const { titulo, descripcion, fecha } = req.body;

    console.log( req.usuario );

    const nuevaTarea = new Tarea({ 
        titulo, 
        descripcion, 
        fecha, 
        usuario: req.usuario.id 
    });
    await nuevaTarea.save();
    const tareaGuardada = await nuevaTarea.save();  
    res.status(201).json({ mensaje: 'Tarea creada exitosamente', tarea: tareaGuardada});
}

export const obtenerTareaPorId = async (req, res) => {      
    console.log('Obteniendo tarea por ID');
    const { _id } = req.params;
    const tarea = await Tarea.findById(_id).populate('usuario');
    if (!tarea) {
        return res.status(404).json({ mensaje: 'Tarea no encontrada' });
    }
    res.json(tarea);
}

export const actualizarTarea = async (req, res) => {
    console.log('Actualizando tarea');
    const { _id } = req.params;
    const { titulo, descripcion, fecha } = req.body;
    const tareaActualizada = await Tarea.findByIdAndUpdate(
        _id,
        { titulo, descripcion, fecha },
        { new: true }
    );
    if (!tareaActualizada) {
        return res.status(404).json({ mensaje: 'Tarea no encontrada' });
    }
    res.json({ mensaje: 'Tarea actualizada exitosamente', tarea: tareaActualizada });
}

export const eliminarTarea = async (req, res) => {
    console.log('Eliminando tarea');
    const { _id } = req.params;
    await Tarea.findByIdAndDelete(_id);
    res.json({ mensaje: 'Tarea eliminada exitosamente' });
}   
