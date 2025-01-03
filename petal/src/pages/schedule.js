import React, { useState } from "react";
import Calendar from "react-calendar";
import { petData } from "../data/pets.js"; 
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
            {/* clicking reset button will bring the user back to the current page */}
            <button id="reset-btn" onClick={() => changeDate(new Date())}>Reset</button>
         </div>
         <div id="event-box">
            <p id="event-date">{date.toLocaleDateString()}</p>
            <table>
               <tbody>
                  {petData
                  .filter((pet) => pet.careDate === date.toLocaleDateString())
                  .map((pet, index) => (
                     <tr key={index}>
                        <td id="schedule-details">
                           <div><span style={{fontWeight:"bold"}}>Name: </span><div className="details">{pet.name}</div></div>
                           <br />
                           <div><span style={{fontWeight:"bold"}}>Breed: </span><div className="details">{pet.breed}</div></div>
                           <br />
                           <div><span style={{fontWeight:"bold"}}>To-Do List: </span>
                              {pet.toDoList
                              // render all properties of toDoList from pets.js
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