
import "./App.css";
import LoginForm from "./Pages/LoginForm";
import LandingPage from "./Pages/LandingPage";
// import DashboardApp from './Pages/Dashboard1';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUpForm from "./Pages/SignUpForm";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Fam from './components/farmdash/Fam'



function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route exact path="/signup" element={<SignUpForm />}></Route>
          <Route exact path="/login" element={<LoginForm />}></Route>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/contact" element={<Contact/>}></Route>
          <Route exact path="/farmer" element={<Fam />}></Route>
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
