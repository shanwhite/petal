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
import Login from "./Login/login";

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Navbar />
                            <Home />
                        </>
                    }
                />
                <Route
                    path="/pets"
                    element={
                        <>
                            <Navbar />
                            <Pets />
                        </>
                    }
                />
                <Route
                    path="/schedule"
                    element={
                        <>
                            <Navbar />
                            <Schedule />
                        </>
                    }
                />
                <Route
                    path="/tips"
                    element={
                        <>
                            <Navbar />
                            <Tips />
                        </>
                    }
                />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}


export default App;