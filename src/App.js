import { Routes, Route, BrowserRouter } from "react-router-dom";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import RouteGuard from "./components/RouteGuard";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RouteGuard isProtected={false}>
              <Register />
            </RouteGuard>
          }
        />

        <Route
          path="/dashboard"
          element={
            <RouteGuard isProtected={true}>
              <Navbar>
                <Dashboard />
              </Navbar>
            </RouteGuard>
          }
        />
        <Route
          path="/profile"
          element={
            <RouteGuard isProtected={true}>
              <Navbar>
                <Profile />
              </Navbar>
            </RouteGuard>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
