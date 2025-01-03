import React, { useState } from "react";
import Calendar from "react-calendar";
import { petData } from "../data/petdata.js"; 
import "../index.css";

function Schedule() {
   const [date, changeDate] = useState(new Date());
   function changeValue(val) {
      changeDate(val);
   }

   return (
      <div className="schedule">
         <div id="calendar">
            <Calendar key={date.toString()} onChange={changeValue} value={date} />
            {/* clicking reset button will bring the user back to today's date */}
            <button id="reset-btn" onClick={() => changeDate(new Date())}>Reset</button>
         </div>
         <div id="event-box">
            <p id="event-date">{date.toLocaleDateString()}</p>
            <br />
            <table>
               <tbody>
                  {petData
                  // when the user clicks on a specific date of the calendar,
                  // if the selected date matches the careDate from the JSON file (../data/pets.js),
                  // display the name, breed, and to-do list in the event box
                  .filter((pet) => pet.careDate === date.toLocaleDateString())
                  // render the name, breed and toDoList properties from pets.js
                  .map((pet, index) => (
                     <tr key={index}>
                        <td id="schedule-details">
                           <div><span style={{fontWeight:"bold"}}>Name: </span><div className="details">{pet.name}</div></div>
                           <br />
                           <div><span style={{fontWeight:"bold"}}>Breed: </span><div className="details">{pet.breed}</div></div>
                           <br />
                           <div><span style={{fontWeight:"bold"}}>To-Do List: </span>
                              {pet.toDoList
                              // render all properties of toDoList from pets.js as a list
                              .map((toDo, i) => (
                                <li key={i} id="schedule-list">{toDo}</li>
                              ))}
                           </div>
                           <br />
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default Schedule;