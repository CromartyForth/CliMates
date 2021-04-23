import React from "react";
import data from "../../data";

function AttendeeList({ attendees }) {
  return (
    <ul>
      <h2>Attendees:</h2>
      {attendees.map((attendee) => (
        <li>{attendee}</li>
      ))}
    </ul>
  );
}

export default AttendeeList;
