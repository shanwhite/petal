import React from "react";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import "./index.css";
import Home from "./pages";
import Pets from "./pages/pets";
import Schedule from "./pages/schedule";
import Details from "./pages/details";
import Login from "./LoginSignUp/login";
import SignUp from "./LoginSignUp/signup";

function App() {
    return (
        <Router>
            <Routes>
                {/* FUNCTIONALITY: Using React Router */}
                <Route path="/" element={<Navigate to={'/signup'}/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/home" element={<><Navbar /><Home /></>}/>
                <Route path="/pets" element={<><Navbar /><Pets /></>}/>
                <Route path="/schedule" element={<><Navbar /><Schedule /></>}/>
                <Route path="/details" element={<><Navbar /><Details /></>}/>
            </Routes>
        </Router>
    );
}

export default App;