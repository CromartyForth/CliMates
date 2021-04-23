import React from "react";
import data from "../../data";

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
          </div>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
