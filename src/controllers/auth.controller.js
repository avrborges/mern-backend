import Usuario from "../models/usuario.model.js";

export const registro = async(req, res) => {
const { nombre, correo, password } = req.body;

const nuevoUsuario = new Usuario({ nombre, correo, password });   

try {
  await nuevoUsuario.save();
  res.status(201).json({ mensaje: 'Usuario registrado exitosamente', nuevoUsuario });
} catch (error) {
  res.status(400).json({ mensaje: 'Error al registrar usuario', error });
}
};

export const login = (req, res) => {
    res.send('login')
};