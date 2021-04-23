import React from "react";
import data from "../../data";
import AttendeeList from "../AttendeeList";
import Map from '../Map/index'

function EventList() {
  return (
    <div>
      <ul>
        {data.map((events) => (
          <div>
            <li>{events.Name}</li>
            <li>{events.Description}</li>
            <li>{events.Date}</li>
            <li>{events.Time}</li>
            <AttendeeList attendees={events.Attendees} />
            <Map latProp={events.Latitude} longProp={events.Longitude}/>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
