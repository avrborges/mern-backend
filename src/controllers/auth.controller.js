import Usuario from "../models/usuario.model.js";
import { createAccessToken } from "../libs/jwt.js";

export const registro = async (req, res) => {

  const { nombre, correo, password } = req.body;
  const nuevoUsuario = new Usuario({ nombre, correo, password });

  try {
    const usuarioGuardado = await nuevoUsuario.save();

    const token = await createAccessToken({ id: usuarioGuardado._id });
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 3600000 
    });

    res.status(201).json({
      mensaje: 'Usuario registrado exitosamente',
      id: usuarioGuardado._id,
      nombre: usuarioGuardado.nombre,
      correo: usuarioGuardado.correo,
      rol: usuarioGuardado.rol,
      creadoEn: usuarioGuardado.creadoEn      
    });
  } catch (error) {
    res.status(400).json({
      mensaje: 'Error al registrar usuario',
      error: error.message
    });
  }
};


export const login = (req, res) => {
    res.send('login')
};