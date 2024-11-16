import React, { useState } from "react";
import "./styles.css";
import icon from "./keiko.jpeg";

function App() {
  const [schedule, setSchedule] = useState([]);
  return (
    <>
      <h1>Petal</h1>
      <img src={icon} alt="dog pic" width="100px"></img>
      <h3>Keiko</h3>
    </>
  );
}

export default App;