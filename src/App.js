import Footer from "./components/Footer";
import Headerr from "./components/Headerr";
import Contact from "./pages/Contact";
import Etc from "./pages/Etc";
import Fsd from "./pages/Fsd";
import Python from "./pages/Python";
import Quiz1 from "./pages/Quiz1";
import PythonQuiz from "./pages/PythonQuiz";
import JavaScriptQuiz from "./pages/JavaScriptQuiz";
import TechnicalQuiz from "./pages/TechnicalQuiz";
import Quizzes from "./pages/Quizzes";
import Subjects from "./pages/Subjects";
import Admin from "./pages/Admin";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aboutus from "./pages/Aboutus";
import ScrollToTop from "./components/ScrollToTop";
import "./theme.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Public pages */}
          <Route path="/" element={<><Headerr/> <Home/> <Footer/></>} />
          <Route path="/contact" element={<><Headerr/> <Contact/> <Footer/></>} />
          <Route path="/Aboutus" element={<><Headerr/> <Aboutus/> <Footer/></>} />
          <Route path="/subjects" element={<><Headerr/> <Subjects/> <Footer/></>} />
          
          {/* Authentication pages */}
          <Route path="/login" element={<><Headerr/> <Login/> <Footer/></>} />
          <Route path="/signup" element={<><Headerr/> <Signup/> <Footer/></>} />
          
          {/* Course pages */}
          <Route path="/python" element={<><Headerr/> <Python/> <Footer/></>} />
          <Route path="/fsd" element={<><Headerr/> <Fsd/> <Footer/></>} />
          <Route path="/etc" element={<><Headerr/> <Etc/> <Footer/></>} />
          
          {/* Protected routes - require authentication */}
          <Route element={<ProtectedRoute />}>
            {/* Quiz pages */}
            <Route path="/quizzes" element={<><Headerr/> <Quizzes/> <Footer/></>} />
            <Route path="/quiz1" element={<><Headerr/> <Quiz1/> <Footer/></>} />
            <Route path="/python-quiz" element={<><Headerr/> <PythonQuiz/> <Footer/></>} />
            <Route path="/javascript-quiz" element={<><Headerr/> <JavaScriptQuiz/> <Footer/></>} />
            <Route path="/technical-quiz" element={<><Headerr/> <TechnicalQuiz/> <Footer/></>} />
            
            {/* User dashboard */}
            <Route path="/dashboard" element={<><Headerr/> <Dashboard/> <Footer/></>} />
          </Route>
          
          {/* Admin section - requires admin role */}
          <Route element={<ProtectedRoute requireAdmin={true} />}>
            <Route path="/admin" element={<><Headerr/> <Admin/> <Footer/></>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
