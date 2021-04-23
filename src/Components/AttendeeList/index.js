import React from "react";
import data from "../../data";

function AttendeeList({attendees}) {
  return <ul>
        {attendees.map((attendee) => (
          <li>{attendee}</li>
           ))
        }
     </ul>
     
}



export default AttendeeList;
