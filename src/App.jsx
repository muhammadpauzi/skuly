import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Works from "./pages/WorksPage";
import Classes from "./pages/Classes";

function App() {
  return (
    <div className="h-full bg-gray-50">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Classes />} />
          <Route path="/classes/:id" element={<Works />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
