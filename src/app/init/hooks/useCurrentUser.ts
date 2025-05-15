import { useQuery } from "@tanstack/react-query";

import { fetchCurrentUser } from "@app/init/api/fetchCurrentUser";

import { useCheckAuth } from "@shared/store/authStore";

export const useCurrentUser = () => {
  const isAuth = useCheckAuth();

  const { data, isLoading, error } = useQuery({
    queryKey: ["currentUser"],
    queryFn: fetchCurrentUser,
    enabled: isAuth,
  });

  return { user: data, isLoading, error };
};
