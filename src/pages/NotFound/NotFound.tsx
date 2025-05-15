import { useQueryClient } from "@tanstack/react-query";
import { Link, Navigate, useLocation } from "@tanstack/react-router";

import type { User } from "@entities/User/user.type";

import styles from "./NotFound.module.css";

export default function NotFound() {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData<User>(["user"]);
  const location = useLocation();

  if (user?.roleName === "admin") {
    // return <Navigate to={from} replace />;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.subtitle}>Страница не найдена</p>
      <Link to="/" className={styles.backButton}>
        Вернуться на главную
      </Link>
    </div>
  );
}
