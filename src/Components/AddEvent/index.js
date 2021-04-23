import React from "react";
import { useState } from "react";

function AddEvent({ inputData, setInputData }) {
  const [details, setDetails] = useState({
    id: 1,
    Name: "",
    Description: "",
    Date: "",
    Time: "",
    Latitude: 52.4754,
    Longitude: -1.8845,
    Attendees: ["", "", "", ""],
  });

  console.log(inputData);
  console.log(details);
  function addEvent() {
    setInputData([...inputData, details]);
  }

  return (
    <div>
      <h2>Add Event</h2>
      <input
        onChange={(e) => setDetails({ ...details, Name: e.target.value })}
        placeholder="Name"
      />
      <input
        onChange={(e) =>
          setDetails({ ...details, Description: e.target.value })
        }
        placeholder="Description"
      />
      <input
        onChange={(e) => setDetails({ ...details, Date: e.target.value })}
        type="date"
      />
      <input
        onChange={(e) => setDetails({ ...details, Time: e.target.value })}
        type="time"
      />
      <button onClick={addEvent}>Create an ecoFriendly event!</button>
    </div>
  );
}

export default AddEvent;
