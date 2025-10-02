import secureLocalStorage from "react-secure-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { User } from "../hooks/useUsers/IResUser";
import { RoleUser } from "../types/enums/enums";



interface IUserStore {
    user : User
    setUser : (user : User)=>void;
}

const INITIAL_USER_STATE : User = {
    id : 0,
    email : "",
    name: "",
    role : RoleUser.USER
   
  };

  export const useUserStore = create(
    persist<IUserStore>(
      (set) => ({
        user: INITIAL_USER_STATE,
        setUser: (user: User) => set((prev) => ({ ...prev, user })),
      }),
      {
        name: "user-storage",
        storage: createJSONStorage(() => secureLocalStorage as any),
      }
    )
  );
  