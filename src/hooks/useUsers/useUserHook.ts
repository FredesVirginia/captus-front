import { useMutation } from "@tanstack/react-query";
import { register } from "./request";
import type { IReqUserRegistration } from "./IReqUser";

export const useUserHook = () => {
  const mutationRegister = useMutation({
    mutationKey: ["register-user"],
    mutationFn: (data: IReqUserRegistration) => register(data),
  });

  return {
    mutationRegister,
  };
};
