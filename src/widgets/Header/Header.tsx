import { useEffect, useState } from "react";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import { useQueryClient } from "@tanstack/react-query";
import { Link, useLocation } from "@tanstack/react-router";

import type { User } from "@entities/User/user.type";

import { useSetAuth } from "@shared/store/authStore";
import { removeCookie } from "@shared/utils/cookieUtils";
import { formatName } from "@shared/utils/formatUtils";

import styles from "./Header.module.css";

const Header = () => {
  const setAuth = useSetAuth();
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData<User>(["currentUser"]);
  const location = useLocation();
  const { width } = useWindowSize();
  const isMobile = width < 870;

  const handleLogout = () => {
    removeCookie("access_token");
    setAuth(false);
    queryClient.removeQueries({ queryKey: ["currentUser"] });
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <Link to="/" className={styles.logo}>
            <img src="/logo.svg" alt="logo" />
            <h1>Эхо участия</h1>
          </Link>
          <nav className={styles.nav}>
            <Link
              to="/"
              className={location.pathname === "/" ? styles.active : ""}
            >
              Основная таблица
            </Link>

            <Link
              to="/"
              className={location.pathname === "/" ? styles.active : ""}
            >
              Оценка мероприятия
            </Link>
          </nav>

          <div className={styles.userActions}>
            <img src="/bell.svg" alt="bell" className={styles.bell} />

            <div className={styles.menu}>
              <Menu>
                <MenuButton className={styles.menuButton}>
                  <div className={styles.userData}>
                    {user ? (
                      <>
                        <h2>{formatName(user.fullName)}</h2>
                        <p>{user.roleName}</p>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                  <img
                    src="/user_logo.svg"
                    alt="user_logo"
                    className={styles.userIcon}
                  />
                </MenuButton>
                <MenuItems className={styles.menuItems}>
                  {user?.roleName === "Администратор" && (
                    <MenuItem>
                      <Link to="/" className={styles.menuItem}>
                        Панель администратора
                      </Link>
                    </MenuItem>
                  )}
                  {isMobile && (
                    <>
                      <MenuItem>
                        <Link to="/" className={styles.menuItem}>
                          Основная таблица
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link to="/" className={styles.menuItem}>
                          Оценка мероприятия
                        </Link>
                      </MenuItem>
                    </>
                  )}
                  <MenuItem>
                    <div
                      onClick={handleLogout}
                      className={`${styles.menuItem} ${styles.menuItem_danger}`}
                    >
                      Выйти
                    </div>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
