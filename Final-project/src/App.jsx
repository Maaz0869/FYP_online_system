import { Routes, Route } from "react-router-dom";
import Home from "./routers/Home";
import About from "./routers/About";
import Project from "./routers/Project";
import Form from "./routers/Form";
import StudentDash from "./pages/StudentDash";
import Dashboard from "./routers/Dashboard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <StudentDash />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/form" element={<Form />} />
        </Routes>

        {/* is ka used ham har page par footer dikhane ke liye kar rahe hain */}
        <Footer />
      </div>
    </>
  );
}

export default App;
