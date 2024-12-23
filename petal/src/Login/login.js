import React from "react";
import '../Login/login.css'; 

function Login() {
    return (
        <div className="OuterWrapper">
        <div className="Wrapper">
            <div className="Rectangle"></div>
            <div className="Title">
                <h1>Welcome!⋆˚✿˖° </h1><br />
                <p>Create your account</p>
            </div>
            <div className="FormContainer">
            
                <form class="InputBox" id="form">
                    <input 
                    type="text"
                    placeholder="Username"
                    id="username"
                    required
                    />
                    <input 
                    type="text"
                    placeholder="Name"
                    id="name"
                    required
                    />
                    <input 
                    type="email"
                    placeholder="Email"
                    id="email"
                    required
                    />
                    <input 
                    type="password"
                    placeholder="Password"
                    id="password"
                    required
                    />
                </form><br />
                <button classname="Create" id="create" type="submit">Create Account</button>
                <br/>
                <a href= "#" classname="accountExist">Already have an account?</a>
            </div>
        </div>
        </div>
    );
};

export default Login;