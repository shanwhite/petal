import React, {useState, useEffect} from "react";
import Logo from '../images/logo1.png';
import Search from '../images/icons8-search-96.png';
import {auth, db} from "../components/firebase";
import {doc, getDoc} from "firebase/firestore";

function Home() {
    const [userDetails, setUserDetails] = useState(null);

    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
            console.log(user);
            const docRef = doc(db, "Users", user.uid);
            const docSnap = await getDoc(docRef);
            // retrieve data if it exists
            if(docSnap.exists()) {
                setUserDetails(docSnap.data());
                console.log(docSnap.data())
            } else {
                console.log("User is not logged in"); 
            }
        })};

    useEffect(() => {
        fetchUserData();
    },[]);

    return (
        <div className="home">
                <section className="banner">
                    <div className="logo-text-container">
                        <div className="logoContainer">
                            {/* FUNCTIONALITY: Conditional Rendering */}
                            {userDetails ? (<div className="welcome"><h1>𑁍ࠬܓWelcome {userDetails.username}</h1></div> ):(<p>Loading...</p>)}
                            <img src={Logo} alt="logo" className="logo"/>
                        </div>
                        <div className="rectangle">
                            <div className="innerRectangle">
                            <h1>What are we about?</h1>
                            <p><u>Petal</u> is a Pet Care Assistant app which keeps track of all pet-related responsibilities, including feeding, grooming, vet appointments, and walks.<br /><br />
                            Its key features include a schedule for feeding and exercises, reminders for medication, milestone tracking for vaccinations, and pet-related tips.</p><br/>
                            <div className="cat">⊹₊⋆ฅ^•ﻌ•^ฅ₊⋆⊹</div>
                            <p>Have fun exploring our application!</p>
                            </div>
                        </div>
                    </div>
                </section>
            <section className="banner2">
                <div className="square"><h1>How it works</h1></div>
                <div className="square2"><h1>My Pets</h1>
                <p>View details of your selected breeds</p>
                </div>
                <div className="square2"><h1>Schedule</h1>
                <p>Keep organised by setting reminders and to-do lists for your pets</p>
                </div>
                <div className="square2"><h1>Pet Details</h1><p>Use the search engine for specific information</p></div>
            </section>
        </div>
    );
};

export default Home;