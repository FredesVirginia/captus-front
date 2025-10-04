import { toast } from "react-hot-toast";

interface IApiError {
  code?: string;
  status?: number;
  message?: string;
}

/**
 * Mapea códigos de error del backend a mensajes de usuario
 */
export function handleApiError(error: any) {
  console.log("🧩 Error capturado:", error);

  // 🔹 Axios normalmente devuelve el error en error.response.data
  // 🔹 Si no existe, usamos el error directamente (como en tu caso)
  const apiError: IApiError = error?.response?.data || error || {};

  const messages: Record<string, string> = {
    USER_EXISTS: "El email ya fue registrado.",
    NOT_USER: "No existe un usuario con ese correo.",
    INVALID_PASSWORD: "La contraseña es incorrecta.",
    REGISTER_ERROR: "Ocurrió un error al registrarte. Inténtalo nuevamente.",
    LOGIN_ERROR: "Ocurrió un error al iniciar sesión.",
  };

  const userMessage =
    messages[apiError.code || ""] ||
    "Ocurrió un error inesperado. Inténtalo más tarde.";

  toast.error(userMessage);
  console.error("❌ API Error capturado:", apiError);

  return {
    code: apiError.code,
    status: apiError.status,
    message: userMessage,
  };
}
