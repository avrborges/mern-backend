import dotenv from "dotenv";
dotenv.config();    

function getEnvVariable(key, defaultValue) {
    if(!process.env[key]) {
        console.warn(`⚠️ La variable de entorno ${key} no está definida. Usando valor por defecto: ${defaultValue}`);
    }   
    return process.env[key] || defaultValue;
}

export const PORT = getEnvVariable('PORT', 4000);
export const MONGODB_URI = getEnvVariable('MONGODB_URI', 'mongodb://127.0.0.1:27017/merndb');   
export const TOKEN_SECRET = getEnvVariable('TOKEN_SECRET', 'secretkey');
