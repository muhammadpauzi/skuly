import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyClasses from "./pages/MyClasses";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="h-full bg-gray-50">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/my-classes" element={<MyClasses />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
