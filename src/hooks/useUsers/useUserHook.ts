import { useMutation } from "@tanstack/react-query";
import { addFavorito, register } from "./request";
import type { IReqFavoritos, IReqUserRegistration } from "./IReqUser";

export const useUserHook = () => {
  const mutationRegister = useMutation({
    mutationKey: ["register-user"],
    mutationFn: (data: IReqUserRegistration) => register(data),
  });

  const mutationAddFavorito = useMutation({
    mutationKey : ["favorito"],
    mutationFn : (data : IReqFavoritos)=> addFavorito(data)
  })

  return {
    mutationRegister,
    mutationAddFavorito
  };
};
