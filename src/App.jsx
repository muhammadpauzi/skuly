import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Works from "./pages/WorksPage";
import Classes from "./pages/Classes";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnAuthenticatedRoute from "./components/UnAuthenticatedRoute";
import { AuthProvider } from "./contexts/useAuth";

function App() {
  return (
    <div className="h-full bg-gray-50">
      <Router>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <AuthenticatedRoute>
                  <Classes />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/classes/:id"
              element={
                <AuthenticatedRoute>
                  <Works />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/sign-in"
              element={
                <UnAuthenticatedRoute>
                  <SignIn />
                </UnAuthenticatedRoute>
              }
            />
            <Route
              path="/sign-up"
              element={
                <UnAuthenticatedRoute>
                  <SignUp />
                </UnAuthenticatedRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
