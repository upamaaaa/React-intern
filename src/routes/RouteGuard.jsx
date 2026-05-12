import { Navigate, Outlet } from "react-router-dom";

const RouteGuard = ({ isProtected }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  if (isProtected && !isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default RouteGuard;
