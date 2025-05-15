import { createFileRoute } from "@tanstack/react-router";

import ProtectedRoute from "@app/wrappers/ProtectedRoute";

export const Route = createFileRoute("/")({
  component: () => (
    <ProtectedRoute>
      <RouteComponent />
    </ProtectedRoute>
  ),
});

function RouteComponent() {
  return <div>Hello "/"!</div>;
}
