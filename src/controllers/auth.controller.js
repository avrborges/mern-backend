import Usuario from "../models/usuario.model.js";
import { createAccessToken } from "../libs/jwt.js";
import bcrypt from "bcryptjs";

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

export const login = async (req, res) => {

  const { correo, password } = req.body;
 
  try {
    const usuarioEncontrado = await Usuario.findOne({ correo });

    if (!usuarioEncontrado) {
      return res.status(404).json({
        mensaje: 'Usuario no encontrado'
      });
    }

    const esPasswordValido = await bcrypt.compare(password, usuarioEncontrado.password);

    if (!esPasswordValido) {
      return res.status(401).json({
        mensaje: 'Usuario y/o contraseña incorrecta'
      });
    }

    const token = await createAccessToken({ id: usuarioEncontrado._id });
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 3600000 
    });

    res.status(201).json({
      mensaje: 'Usuario logueado exitosamente',
      id: usuarioEncontrado._id,
      nombre: usuarioEncontrado.nombre,
      correo: usuarioEncontrado.correo, 
      rol: usuarioEncontrado.rol,
      creadoEn: usuarioEncontrado.creadoEn      
    });
  } catch (error) {
    res.status(400).json({
      mensaje: 'Error al loguear usuario',
      error: error.message
    });
  }
};

export const logout = (req, res) => {
  res.clearCookie('token');
  res.status(200).json({
    mensaje: 'Usuario deslogueado exitosamente'
  });
}