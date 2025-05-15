import type { User } from "@entities/User/user.type";

import api from "@shared/api";
import { getCookie } from "@shared/utils/cookieUtils";

export const fetchCurrentUser = async () => {
  const accessToken = getCookie("access_token");
  if (!accessToken) {
    throw new Error("Не удалось найти токен");
  }

  const response = await api.post<User>(`/user/adminProfile`, {
    access_token: accessToken,
  });

  return response.data;
};
