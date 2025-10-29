import { Router } from "express";
import { validarToken } from '../middlewares/validarToken.js';
import { crearTarea, obtenerTareas, obtenerTareaPorId, eliminarTarea, actualizarTarea } from "../controllers/tarea.controller.js";

const router = Router();

router.post('/tarea', validarToken, crearTarea);
router.get('/tarea', validarToken, obtenerTareas);  
router.get('/tarea/:_id', validarToken, obtenerTareaPorId);
router.delete('/tarea/:_id', validarToken, eliminarTarea);
router.put('/tarea/:_id', validarToken, actualizarTarea);

export default router
