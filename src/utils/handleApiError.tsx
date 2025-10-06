// Eliminada importación no usada de react-hot-toast

interface IApiError {
  code?: string;
  status?: number;
  message?: string;
}



export function handleApiError(error: any) {
  console.log("🧩 Error capturado:", error);

  const apiError: IApiError = error?.response?.data || error || {};
  const messages: Record<string, string> = {
    USER_EXISTS: "El email ya fue registrado.",
    NOT_USER: "No existe un usuario con ese correo.",
    INVALID_PASSWORD: "La contraseña es incorrecta.",
    REGISTER_ERROR: "Ocurrió un error al registrarte. Inténtalo nuevamente.",
    LOGIN_ERROR: "Ocurrió un error al iniciar sesión.",
    VALIDATION_ERROR: "Error de validacion de Datos",
    INVALID_DISCOUNT_VALUE : "Hay un descuento invalido",
    GET_FLOORS_ERROR : "Hubo un error en Traer las Plantas",
    USER_NOT_FOUND: "El usuario no existe",
    FLOOR_NOT_FOUND : "La planta seleccionada no existe"
  };

  const userMessage =
    messages[apiError.code || ""] ||
    "Ocurrió un error inesperado. Inténtalo más tarde.";

// No mostrar UI aquí; devolver el mensaje para que la capa de UI lo maneje

  console.error("❌ API Error capturado:", apiError);

  return {
    code: apiError.code,
    status: apiError.status,
    message: userMessage,
  };
}
