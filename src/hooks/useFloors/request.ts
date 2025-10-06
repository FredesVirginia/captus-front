import { captusApi } from "../../api/api";
import type { IResFloor } from "./IResFloor";

export const getFloor = async (page : number): Promise<IResFloor> => {
  try {
    const data = await captusApi.get(`/floors?page=${page}`);
    return { ...data.data, status: data.status };
  } catch (error: any) {
    console.log("EL ERROR FUE EN POST FLOOR", error.response.data);
    throw error;
  }
};
