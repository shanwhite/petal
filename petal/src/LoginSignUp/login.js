import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../LoginSignUp/login.css'; 
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../components/firebase";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("User logged in Successfully");
            navigate('/home');
        }
        catch(error) {
            console.log(error.message);
        }
    };

    return (
        <div className="body">
            <div className="OuterWrapper">
                <div className="Wrapper">
                    <div className="Rectangle"></div>
                    <div className="Title">
                        <h1>°˖✿˚⋆Welcome Back!⋆˚✿˖°</h1><br />
                        <p>Login to your account</p>
                    </div>
                    <br/>
                    <div className="FormContainer1">
                        <form onSubmit={handleSubmit} className="InputBox2" id="form">
                            <label className="Email">Email</label>
                            <input 
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}  // email entered will be stored in setEmail
                                required
                            />
                            <label className="Password">Password</label>
                            <input 
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}  // email entered will be stored in setEmail
                                required
                            />
                            <div className="buttonContainer2"><button id="login" type="submit">Login</button></div>
                        </form>
                    </div>
                    <br/>
                    <Link to = "/signup" className="createAcc">Create Account</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;