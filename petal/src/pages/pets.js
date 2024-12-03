import React from "react";
import '../design/pets.css'; 
import petImage from '../images/pet.png';

function Pets() {
    return (
        //The parent element
        <div className="pets">
            <div className="container">
            <div className="test"> TESTING </div>
            <div className="profile-container"> 


                 <div class="image-container"> 
                    <img src={petImage} alt="Pet" className="image-content"/>
                 </div>

                <div className="text">
                    <h2> TESTING 2</h2>
                    <p>This is to see the structure in pets </p>
                </div>

            </div>
            </div>





        </div>

    );
};

export default Pets; 