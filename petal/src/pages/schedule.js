import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";


const Schedule = () => {

    const [date, changeDate] = useState(new Date());

    function changeValue(val) {
       changeDate(val);
    }

  return (
      <div>
         <h3>
            {" "} Using the <i> react-calender </i> library to create calender in React JS{" "}
         </h3>
         <Calendar onChange = {changeValue} value = {date} />
         <p>The selected date is - {date.toLocaleDateString()}</p>
      </div>
   );
};

export default Schedule;