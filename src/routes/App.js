import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard.jsx";
import RouteGuard from "../components/RouteGuard";
import Profile from "../pages/Profile/Profile";
import Navbar from "../components/Navbar/Navbar";
import ProjectsPage from "../pages/Projects/ProjectsPage";
import DashboardLayout from "../Layout/DashboardLayout";
function App() {
  return (
    <BrowserRouter>
     <ToastContainer/> 
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route element={<RouteGuard isProtected={true} />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Route>
        </Route>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
