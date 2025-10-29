import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

export const validarToken = (req, res, next) => {
    console.log('Validando token...');
    const { token } = req.cookies;
    if (!token) {
        return res.status(401).json({ mensaje: 'Acceso no autorizado. Token no proporcionado.' });
    }
    jwt.verify(token, TOKEN_SECRET, (error, usuario) => {
        if (error) {
            return res.status(401).json({ mensaje: 'Acceso no autorizado. Token inválido.' });
        }
        req.usuario = usuario;
        
        next();
    });
}