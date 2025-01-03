import React, { useState } from "react";
import { petData } from "../data/pets.js";
import "../design/pets.css";
import "../design/details.css"; 

/** References: used CoPilot to modify the search function
 *              code from CS385 Lab 3 Question 2 was used to help
 *
 * Several issues I've encountered which CoPilot helped me find alternatives
 * Main issue was needing to refine the search function where;
 * First, I realised that the search function was case sensitive, so if 'male' was searched, details with Female would render instead
 * Due to modifying the search item, it solved issues where if cockatiel was searched, then any detail containing these letters would render.
 * Therefore, I used methods like .slice() and .startsWith() because no modification and using .includes() would make those issues.
 *
 * Lastly, due to modifying the search item, it would not satisfy integers
 * Therefore, I added an if statement and with the aid of CoPilot to use .test()
 * The search function would first check if the search item is a digit.
 * If it is, convert pet.age to an integer and render the pet detail that satisfies the search item.
 * if not, modify search item for string pet details.
 */

//SEARCH FUNCTION
function Tips() {
    const [search, setSearch] = useState("");
    function searchPet(pet, search) {
      if (/^\d+$/.test(search)) {
        //if statement to check for digits
        return pet.age === parseInt(search, 10);
      } else {
        const modSearch =
          search.charAt(0).toUpperCase() + search.slice(1).toLowerCase().trim(); //modified search item and excluded leading whitespaces
        return (
          pet.name.startsWith(modSearch) ||
          pet.gender.startsWith(modSearch) ||
          pet.breed.startsWith(modSearch)
        );
      }
    }

    let filteredPets = petData.filter((pet) => searchPet(pet, search)); // Filter pets based on search
    let count = filteredPets.length; // Number of pets matching the search

    return (
    <div className="detail-container">
        <div className= "header-container">
          {/* div containing header and input box */}
        <div className="detail-header"><h1> Pet Details List 🐈‍⬛</h1></div>
          <div>
              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search details of any pet..."
                />
          </div>
        </div>
      {/*Reference: Used Copilot here to refine the conditional rendering 
      Helped me find a way to render petDate if nothing was searched
      Else, render the pet details and messages based on search
      */}
      {/*CONDITIONAL RENDERING */}
      {search && (
        <div className="search-message">
          {count === 0 && <div className="empty"><p>No pet detail found under "{search}"</p></div>}
          {count === 1 && <div className="one"><p>One pet detail found under "{search}"</p></div>}
          {count > 1 && <p>{count} pet details found under "{search}"</p>}
        </div>
      )}
      {/*RENDER PET LIST*/}
      <div>
        {/* START OF TABLE */}
      <table>
        <tbody>
          {(search ? filteredPets : petData).map((pet, index) => (
            <tr key={index} className="detail-rows">
                {/* pet image */}
                <td>
                    <img src={pet.image} alt={pet.name} className="images" />
                </td>
                {/* Pet name, gender, breed, age, and care date*/}
                <td className="petdetails">
                  <div><span>Name:</span> {pet.name}</div>
                  <div><span>Gender:</span> {pet.gender}</div>
                  <div><span>Breed:</span> {pet.breed}</div>
                  <div><span>Age:</span> {pet.age}</div>
                  <div><span>Care date: </span> {pet.careDate}</div>
                </td>
                {/* *Pet description with interests
                    * Used nested mapping to access loves and hates from petDate */}
                <td>
                    <span style={{position: "relative", top: "-15px", left: "-15px"}}>Description 🐾</span>
                    <br />
                    {pet.description}
                    <div className="interest">
                        {/* Pet likes */}
                        <ul>
                            <span> ✔ </span>
                            {pet.loves.map((love, i) => (
                              <li key={i}>{love}</li>
                            ))}
                        </ul>
                        {/* Pet dislikes */}
                        <ul>
                          <span> ✖ </span>
                          {pet.hates.map((hate, i) => (
                            <li key={i}>{hate}</li>
                          ))}
                        </ul>
                    </div>
                </td>
                {/*Used nested mapping to access the to-do list*/}
                <td>
                  <span style={{position: "relative", top: "-15px", left: "-15px"}}>To-do List ☑</span>
                  <ul>
                    {pet.toDoList.map((list, i) => (
                      <li key={i}>{list}</li>
                    ))}
                  </ul>
                </td>
            </tr>
          ))}
        </tbody>
      </table> {/*END OF TABLE */}
      </div>
    </div>
  );
}

export default Tips;