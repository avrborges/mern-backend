import { Router } from "express";
import { validarToken } from '../middlewares/validarToken.js';
import { crearTarea, obtenerTareas, obtenerTareaPorId, eliminarTarea, actualizarTarea } from "../controllers/tarea.controller.js";

import { nuevaTareaSchema, actualizarTareaSchema } from '../schemas/tareas.schema.js';
import { validateSchema } from '../middlewares/validator.middleware.js';

const router = Router();

router.post('/tarea', validarToken, validateSchema(nuevaTareaSchema), crearTarea);
router.get('/tarea', validarToken, obtenerTareas);  
router.get('/tarea/:_id', validarToken, obtenerTareaPorId);
router.delete('/tarea/:_id', validarToken, eliminarTarea);
router.put('/tarea/:_id', validarToken, validateSchema(actualizarTareaSchema), actualizarTarea);

export default router
