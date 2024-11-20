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
import Reminders from "./pages/reminders";
import Tips from "./pages/tips";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/pets" element={<Pets />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/reminders" element={<Reminders/>} />
                <Route path="/tips" element={<Tips />} />
            </Routes>
        </Router>
    );
}

export default App;