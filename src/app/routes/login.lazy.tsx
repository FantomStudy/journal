import { createLazyFileRoute } from "@tanstack/react-router";

import Login from "@pages/Login/Login";

export const Route = createLazyFileRoute("/login")({
  component: Login,
});
