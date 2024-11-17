import React, { useState } from "react";
import "./App.css"; // stylesheet
import icon from "./assets/keiko.jpeg";

// import the functions we need from the SDKs we need
import { initializeApp } from "firebase/app";
// TODO: add SDKs for Firebase products we want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSqkQ9zl3esFDVed8lIGAj1L5hWjgqqDY",
  authDomain: "petal-cs385.firebaseapp.com",
  projectId: "petal-cs385",
  storageBucket: "petal-cs385.firebasestorage.app",
  messagingSenderId: "841063821284",
  appId: "1:841063821284:web:c221f202bdd3bad6f1e1f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  const [choice, setChoice] = useState("Pets");

  return (
    <>
      <h1>Petal</h1>
      <img src={icon} alt="dog pic" width="100px"></img>
      <h3>Keiko</h3>
      <div className="tabs">
        <button onClick={() => selectCategory("Pets")}>Pets</button>&nbsp;
        <button onClick={() => selectCategory("Schedule")}>Schedule</button>&nbsp;
        <button onClick={() => selectCategory("Reminders")}>Reminders</button>&nbsp;
        <button onClick={() => selectCategory("Tips")}>Tips</button>&nbsp;
      </div>
      <br /> <br />
    </>
  );

  function selectCategory(category) {
    setChoice(category);
  }
}

export default App;