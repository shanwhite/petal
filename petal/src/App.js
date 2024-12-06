import React from "react";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import "./index.css";
import Home from "./pages";
import Pets from "./pages/pets";
import Schedule from "./pages/schedule";
import Tips from "./pages/tips";
import Login from "./pages/login";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/pets" element={<Pets />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/tips" element={<Tips />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;