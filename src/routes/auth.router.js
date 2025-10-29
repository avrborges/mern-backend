import { Router } from "express";
import { registro, login, logout, profile } from "../controllers/auth.controller.js"
import { validarToken } from "../middlewares/validarToken.js";

import { registroSchema, loginSchema } from "../schemas/auth.schema.js";
import { validateSchema } from "../middlewares/validator.middleware.js";

const router = Router();

router.post('/registro', validateSchema(registroSchema), registro);
router.post('/login', validateSchema(loginSchema), login);
router.post('/logout', logout);

router.get('/profile', validarToken, profile);


export default router