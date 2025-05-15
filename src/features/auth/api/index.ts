import api from "@shared/api";

import type { LoginRequest } from "../types/api.types";

export const loginUser = async (credentials: LoginRequest) => {
  const response = await api.post("/auth/login", credentials, {
    withCredentials: true,
  });

  return response.data;
};
