import { captusApi } from "../../api/api";
import type { IReqUserRegistration } from "./IReqUser";
import type { IResUser } from "./IResUser";

export interface ICredentiales {
  email: string;
  password: string;
}

export const login = async (credentials: ICredentiales): Promise<IResUser & { status: number }> => {
  try {
    const data = await captusApi.post("/auth/auth_login", credentials);
    return {...data.data, status: data.status }
  } catch (error: any) {
    console.log("EL ERROR FUE", error.response.data);
    throw error.response.data;
  }
};

export const register = async (payload: IReqUserRegistration): Promise< { status: number }> => {
  try {
    const data = await captusApi.post("/auth/auth_register", payload);
    return {...data.data, status: data.status }
  } catch (error: any) {
    console.log("EL ERROR FUE", error.response.data);
      throw error;
  }
};