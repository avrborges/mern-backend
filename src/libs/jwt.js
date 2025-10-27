import { TOKEN_SECRET } from "../config.js";
import jwt from "jsonwebtoken"; 

export async function createAccessToken(payload) {
    return new Promise((resolve, reject) => {
        if(!payload || typeof payload !== 'object') { 
            return reject(new Error('Payload inválido para el token'));
        }
        jwt.sign(payload, TOKEN_SECRET, { expiresIn: '1h' }, (error, token) => {
            if(error) {
                console.error('Error al crear el token:', error);
                return reject(error);
        }
            resolve(token);
    });
    });
} 