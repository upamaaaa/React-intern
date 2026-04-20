import { Navigate } from "react-router-dom";
const UnprotectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return !isAuthenticated ? children : <Navigate to="/dashboard" />;
};

export default UnprotectedRoute;

