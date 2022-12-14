
import "./App.css";
import LoginForm from "./Pages/LoginForm";
import LandingPage from "./Pages/LandingPage";
// import DashboardApp from './Pages/Dashboard1';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUpForm from "./Pages/SignUpForm";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Fam from './components/farmdash/Fam'
import Admin from "./components/admin/Admin";
import Buyer from "./components/buyer/Buyer";
import Researcher from "./components/researcher/Researcher";
import Product from "./components/products/Product";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ChatPage from "./Pages/ChatPage";
import Reseacher from "./components/researcher/Reseacher";
import StartsDash from "./components/farmdash/StartsDash";
import Chats from "./components/farmdash/Chats";
import AddItem from './components/farmdash/AddProduct'
import Researchpost from "./components/researcher/Researchpost";

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
          <Route exact path="/addProduct" element={<AddItem/>}></Route>
          <Route  path="/buyProducts" element={<Product />}/>
          <Route exact path="/message" element={<ChatPage/>}></Route>
          <Route exact path="/admin" element={<Admin />}></Route>
          <Route exact path="/buyer" element={<Buyer />}></Route>
          <Route exact path="/products" element={<Product />}></Route>
          <Route exact path="/researcher" element={<Researcher />}></Route>
          <Route exact path="/farmer/*" element={<Fam />}/>
          <Route exact path="/buyer/*" element={<Buyer />}/>
          <Route exact path="/researcher/*" element={<Researcher />}/>
                

         
          <Route exact path="/chat" element={<ChatPage/>}></Route>
          <Route exact path="/researcher" element={<Reseacher/>}></Route>
          {/* <Route path='/farmer' element={<StartsDash/>}/>
            <Route path='/farmer/charts' element={<Chats/>}/> */}
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
