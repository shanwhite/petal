import React, { useState } from "react";
import Calendar from "react-calendar";
import "../index.css";

function Schedule() {
   const [date, changeDate] = useState(new Date());
   function changeValue(val) {
      changeDate(val);
   }

   return (
      <div className="schedule">
         <div id="calendar">
            <Calendar onChange={changeValue} value={date} />
         </div>
         <div id="event-box">
            <p id="event-date">{date.toLocaleDateString()}</p>
         </div>
      </div>
   );
};

export default Schedule;