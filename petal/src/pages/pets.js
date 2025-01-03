import React from "react";
import { petData } from "../data/petdata.js"; 
import '../design/pets.css'; 

// start of structuring the pet table
const table = () => {
  return (
    // main container holding all contents
    <div className="pet-container">
        {/* START OF TABLE */}
      <table>
        <tbody>
            {/* used map function to render all pet data from JSON file */}
            {petData.map((pet, index) => (
                <tr key={index} className="rows">
                    {/* pet image */}
                    <td>
                        <img src={pet.image} alt={pet.name} className="images" />
                    </td>
                    {/* pet name, gender, breed and age */}
                    <td className="details">
                        <div><span>Name:</span> {pet.name}</div>
                        <div><span>Gender:</span> {pet.gender}</div>
                        <div><span>Breed:</span> {pet.breed}</div>
                        <div><span>Age:</span> {pet.age}</div>
                    </td>
                    {/* pet description with interests
                        used nested mapping to access loves and hates from petData */}
                    <td>
                        <span style={{position: "relative", top: "-15px", left: "-15px"}}>Description 🐾</span>
                        <br />
                        {pet.description}
                        <div className="interest">
                            {/* pet likes */}
                            <ul>
                                <span> ✔ </span>
                                {pet.loves.map((love, i) => (
                                  <li key={i}>{love}</li>
                                ))}
                            </ul>
                            {/* pet dislikes */}
                            <ul>
                              <span> ✖ </span>
                              {pet.hates.map((hate, i) => (
                                <li key={i}>{hate}</li>
                              ))}
                            </ul>
                        </div>
                    </td>
                </tr> ))}
            </tbody>
        </table> {/* END OF TABLE */}
    </div>
  );
};

export default table;
