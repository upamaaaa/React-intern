import { Navigate } from "react-router-dom";

const RouteGuard = ({ children, isProtected }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  if (isProtected && !isAuthenticated) {
    return <Navigate to="/" />;
  }

  if (!isProtected && isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default RouteGuard;
