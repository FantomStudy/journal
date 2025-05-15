import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

import { loginUser } from "@features/auth/api";
import type { LoginRequest } from "@features/auth/types/api.types";

import { useSetAuth } from "@shared/store/authStore";

export const useLoginUser = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const setAuth = useSetAuth();

  const { mutate, isPending } = useMutation({
    mutationFn: (credentials: LoginRequest) => loginUser(credentials),
    onSuccess: async () => {
      setAuth(true);
      await queryClient.refetchQueries({ queryKey: ["currentUser"] });
      navigate({ to: "/", replace: true });
    },
    onError: (error) => {
      console.error("Попытка входа не удалась:", error);
    },
  });

  return { login: mutate, isPending };
};
