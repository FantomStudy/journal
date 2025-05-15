import { createRouter } from "@tanstack/react-router";

import { routeTree } from "@/routeTree.gen";

import NotFound from "@pages/NotFound/NotFound";

const router = createRouter({
  routeTree,
  defaultNotFoundComponent: () => <NotFound />,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export { router };
