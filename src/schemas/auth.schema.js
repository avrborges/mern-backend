import { z } from "zod";

export const registroSchema = z.object({
  nombre: z.string({ required_error: "El nombre es obligatorio" })
    .trim()
    .min(2, { message: "Debe tener al menos 2 caracteres" }),
  correo: z.string({ required_error: "El correo electrónico es obligatorio" })
    .email({ message: "Debe ser un correo válido (ejemplo@dominio.com)" }),
  password: z.string({ required_error: "La contraseña es obligatoria" })
    .min(6, { message: "Debe tener al menos 6 caracteres" })
    .regex(/[A-Z]/, { message: "Debe incluir al menos una letra mayúscula" })
    .regex(/[0-9]/, { message: "Debe incluir al menos un número" }),
});

export const loginSchema = z.object({
  correo: z.string({ required_error: "El correo electrónico es obligatorio" })
    .email({ message: "Debe ser un correo válido (ejemplo@dominio.com)" }),
  password: z.string({ required_error: "La contraseña es obligatoria" })
    .min(6, { message: "Debe tener al menos 6 caracteres" }),
});
