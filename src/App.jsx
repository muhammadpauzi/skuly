import Navbar from "./components/Navbar";
import Login from "./pages/SignIn";
import Register from "./pages/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="h-full bg-gray-50">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
