import { Routes, Route, BrowserRouter } from "react-router-dom";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute"; 
import UnprotectedRoute from "./components/unprotectedRoute";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <UnprotectedRoute>
            <Register />
          </UnprotectedRoute>
        } />
        
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
            
          </ProtectedRoute>
          } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
