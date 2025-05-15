import { useLogin } from "@features/auth/model/hooks/forms/useLogin";

import styles from "./Login.module.css";

export default function Login() {
  const { submitAction, isPending, state } = useLogin();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Авторизация</h2>
        <form className={styles.form} action={submitAction}>
          <input
            type="text"
            name="login"
            placeholder="Логин"
            className={styles.input}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            className={styles.input}
            required
          />
          <button className={styles.button} type="submit" disabled={isPending}>
            {isPending ? "Вход..." : "Войти"}
          </button>
        </form>
        {state.error && <p className={styles.error}>{state.error}</p>}
      </div>
    </div>
  );
}
