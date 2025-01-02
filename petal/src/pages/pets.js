import React from "react";
import { petData } from "../data/pets.js"; 
import '../design/pets.css'; 


//start of structuring the pet table
const table = () => {
  return (
    <div className="container">
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <tbody>
          {petData.map((pet, index) => (
            <tr key={index} className="rows">
              <td>
                <img src={pet.image} alt={pet.name} className="images" />
              </td>
              <td className="details">
                <div>
                  <span>Name:</span> {pet.name}
                </div>
                <div>
                  <span>Gender:</span> {pet.gender}
                </div>
                <div>
                  <span>Breed:</span> {pet.breed}
                </div>
                <div>
                  <span>Age:</span> {pet.age}
                </div>
              </td>
              <td>
                <span style={{position: "relative", top: "-15px", left: "-15px"}}>Description 🐾</span>
                <br />
                {pet.description}
                <div className="interest">
                  <ul>
                    <span> ✔ </span>
                    {pet.loves.map((love, i) => (
                      <li key={i}>{love}</li>
                    ))}
                  </ul>
                  <ul>
                    <span> ✖ </span>
                    {pet.hates.map((hate, i) => (
                      <li key={i}>{hate}</li>
                    ))}
                  </ul>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
  );
};

export default table;
