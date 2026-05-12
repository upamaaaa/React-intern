import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Dashboard from "@/pages/Dashboard/Dashboard";
import RouteGuard from "@/routes/RouteGuard";
import Profile from "@/pages/Profile/Profile";
import Navbar from "@/components/Navbar/Navbar";
import ProjectsPage from "@/pages/Projects/ProjectsPage";
import DashboardLayout from "@/Layout/DashboardLayout";
import Login from "@/pages/Login/Login";
import Todo from "@/pages/Todo/Todo";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route element={<RouteGuard isProtected={true} />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/todo" element={<Todo />} />
          </Route>
        </Route>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
