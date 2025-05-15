import { create } from "zustand";

import { getCookie } from "@shared/utils/cookieUtils";

interface AuthState {
  isAuth: boolean;
  setAuth: (value: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuth: !!getCookie("access_token"),
  setAuth: (value) => set({ isAuth: value }),
}));

export const useCheckAuth = () => useAuthStore((state) => state.isAuth);
export const useSetAuth = () => useAuthStore((state) => state.setAuth);
