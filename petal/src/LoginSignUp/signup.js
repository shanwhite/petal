import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../LoginSignUp/signup.css'; 
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth, db} from "../components/firebase";
import {setDoc, doc} from "firebase/firestore";

function SignUp() {
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");  
const [password, setPassword] = useState("");
//Track whether an account is created or not
const [accountCreated, setAccountCreated] = useState(false);
const navigate = useNavigate();

const handleRegister= async (e)=>{
    e.preventDefault(); //prevents page from refreshing

    const formFilled = validateForm();
    
        if(formFilled) {
            setAccountCreated(true);
            try{
                //Whenever this function is executed and it is successfully registers a user
                //all the user's details will be stored in getAuth() variable in firebase file
                await createUserWithEmailAndPassword(auth, email, password); //firebase function
                //Accessing the current user's details
                const user= auth.currentUser;
                console.log(user);
                //If user exists, access database, create a collection of Users and store by user's ID
                if(user){
                    await setDoc(doc(db, "Users", user.uid), {
                        email: user.email,
                        username: username,
                    });
                }
                console.log("User was registered successfully");
                navigate('/home');
        
            } catch (error) {
                console.log(error.message);
            }
        }
        else{
            setAccountCreated(false);
            alert("All fields must be filled!");
        }
}

//check if the fields are empty
const validateForm = () => {

    const userUsername = document.getElementById('username').value;
    const userEmail = document.getElementById('email').value;
    const userPassword = document.getElementById('password').value;

    //checking if the fields are empty
    return userUsername.trim() !== '' && userEmail.trim() !== '' && userPassword.trim() !== '';
}

    return (
        <div className="body">
            <div className="OuterWrapper">
            <div className="Wrapper">
                <div className="Rectangle"></div>
                <div className="Title2">
                    <h1>°˖✿˚⋆Welcome to Petal!⋆˚✿˖°</h1><br />
                    <p>Create your account</p>
                </div>
                <div className="FormContainer">
                    <form onSubmit={handleRegister} className="InputBox" id="form">
                        <label className="Username">Username</label>
                        <input 
                        type="text"
                        id="username"
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        />
                        <label className="Email">Email</label>
                        <input 
                        type="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
                        <label className="Password">Password</label>
                        <input 
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" 
                        required
                        />
                        <div className="buttonContainer"><button id="create" type="submit">Create Account</button></div>
                    </form>
                </div>
                <br/>
                <Link to= "/login" className="accountExist">Already have an account?</Link>
            </div>
            </div>
        </div>
    );
};

export default SignUp;