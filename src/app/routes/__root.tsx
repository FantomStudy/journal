import {
  Outlet,
  createRootRoute,
  rootRouteId,
  useLocation,
  useMatch,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { EXCLUDED_ROUTES } from "@app/configs/headerConfig";

import Header from "@widgets/Header/Header";

export const Route = createRootRoute({
  component: () => {
    const location = useLocation();
    const isNotFound = useMatch({
      from: rootRouteId,
      select: (s) => s.globalNotFound,
    });

    const isHide = EXCLUDED_ROUTES.includes(location.pathname) || isNotFound;

    return (
      <>
        {!isHide && <Header />}
        <Outlet />
        <TanStackRouterDevtools />
      </>
    );
  },
});
