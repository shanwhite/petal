import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Schedule() {

    const [date, changeDate] = useState(new Date());

    function changeValue(val) {
       changeDate(val);
    }

  return (
      <div className="schedule">
        <br />
         <Calendar onChange = {changeValue} value = {date} />
         <p>The selected date is - {date.toLocaleDateString()}</p>
      </div>
   );
};

export default Schedule;