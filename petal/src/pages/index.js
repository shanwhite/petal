import React from "react";
import Logo from '../images/logo1.png';
import Search from '../images/icons8-search-96.png';
import {auth, db} from "../components/firebase";
import {doc, getDoc} from "firebase/firestore";
import { useEffect, useState} from "react";

function Home() {
    const [userDetails, setUserDetails] = useState(null);

    const fetchUserData= async () => {
        auth.onAuthStateChanged(async (user) => {
            console.log(user);
            const docRef=doc(db, "Users", user.uid);
            const docSnap=await getDoc(docRef);
            //If there exists data, retrieve the data
            if(docSnap.exists()){
                setUserDetails(docSnap.data());
                console.log(docSnap.data())
            }
            else{
                console.log("User is not logged in"); 
            }
        })};

    useEffect(()=>{
        fetchUserData();
    },[]);

    return (
    <div className="home">
            <section className="banner">
                <div className="logo-text-container">
                    <div className="logoContainer">
                        {userDetails ? (<div className="welcome"><h1>𑁍ࠬܓWelcome {userDetails.username}</h1></div> ):(<p>Loading...</p>)}
                        <img src={Logo} alt="logo" className="logo"/>
                    </div>
                    <div className="rectangle">
                        <div className="innerRectangle">
                        <h1>What are we about?</h1>
                        <p><u>Petal</u> is a Pet Care Assistant app which keeps track of all pet-related responsibilities, including feeding, grooming, vet appointments, and walks.<br /><br />
                        Its key features include a schedule for feeding and exercises, reminders for medication, milestone tracking for vaccinations, and pet-related tips.</p><br/>
                        <div className="cat">⊹₊⋆*ฅ^•ﻌ•^ฅ*₊⋆⊹</div>
                        <p>Have fun exploring our application!</p>
                        </div>
                    </div>
                </div>
            </section>
        <section className="banner2">
            <div className="square"><h1>How it works</h1></div>
            <div className="square2"><h1>My Pets</h1>
            <p>This section allows you to view your selection of breeds. Here, you can learn more about your pet including their likes and dislikes. </p>
            </div>
            <div className="square2"><h1>Schedule</h1>
            <p>This section </p>
            </div>
            <div className="square2"><h1>Pet Details</h1><p>This section features a search engine that allows you to find information faster</p></div>
        </section>
    </div>
    );
};
export default Home;