import { RouterProvider } from "@tanstack/react-router";

import Loader from "@shared/ui/Loader/Loader";

import { router } from "./configs/router";
import { useCurrentUser } from "./init/hooks/useCurrentUser";
import "./styles/App.css";

export default function App() {
  const { isLoading, error } = useCurrentUser();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Не удалось получить данные пользователя</div>;
  }

  return <RouterProvider router={router} />;
}
