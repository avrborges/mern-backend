import { z } from "zod";

export const nuevaTareaSchema = z.object({
  titulo: z.string({ required_error: "El título es obligatorio" })
    .trim()
    .min(2, { message: "Debe tener al menos 2 caracteres" }),
  descripcion: z.string({ required_error: "La descripción es obligatoria" })
    .trim()
    .min(10, { message: "Debe tener al menos 10 caracteres" }),
});

export const actualizarTareaSchema = z.object({
  titulo: z.string().trim().min(2, { message: "Debe tener al menos 2 caracteres" }).optional(),
  descripcion: z.string().trim().min(10, { message: "Debe tener al menos 10 caracteres" }).optional(),
});