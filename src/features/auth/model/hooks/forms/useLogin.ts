import { useActionState } from "react";

import type { LoginRequest } from "@features/auth/types/api.types";

import type { FormState } from "../../types/form.types";
import { useLoginUser } from "../queries/useLoginUser";

export const useLogin = () => {
  const { login, isPending } = useLoginUser();

  const [state, submitAction] = useActionState<FormState, FormData>(
    handleLogin,
    {
      data: null,
      error: null,
    },
  );

  async function handleLogin(prevState: FormState, formData: FormData) {
    const credentials = {
      login: formData.get("login"),
      password: formData.get("password"),
    } as LoginRequest;

    login(credentials);

    return { ...prevState };
  }

  return {
    state,
    submitAction,
    isPending,
  };
};
