import { useQueryClient } from "@tanstack/react-query";
import { Navigate, notFound } from "@tanstack/react-router";

import type { User } from "@entities/User/user.type";

import { useCheckAuth } from "@shared/store/authStore";

interface ProtectedRouteProps {
  children?: React.ReactNode;
  requiredRole?: string | null;
}

const ProtectedRoute = ({
  children,
  requiredRole = null,
}: ProtectedRouteProps) => {
  const isAuth = useCheckAuth();

  const queryClient = useQueryClient();
  const user = queryClient.getQueryData<User>(["currentUser"]);

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && user?.roleName !== requiredRole) {
    throw notFound();
  }

  return children;
};

export default ProtectedRoute;
