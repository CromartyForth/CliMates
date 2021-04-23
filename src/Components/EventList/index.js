import React from "react";

import AttendeeList from "../AttendeeList";
import Map from "../Map/index";

function EventList({ inputData }) {
  return (
    <div className="eventList">
      <ul>
        {inputData.map((events) => (
          <div className="gridContainer">
            <div className="gridItem">
              <h2>Event Details:</h2>
              <li>{events.Name}</li>
              <li>{events.Description}</li>
              <li>{events.Date}</li>
              <li>{events.Time}</li>
            </div>
            <div className="gridItem">
              <AttendeeList attendees={events.Attendees} />
            </div>
            <div className="gridItem">
              <Map latProp={events.Latitude} longProp={events.Longitude} />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
