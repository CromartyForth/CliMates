import "./App.css";
import AddEvent from "../AddEvent";
import EventList from "../EventList";
import data from "../../data";
import { useState } from "react";
import climatesLogo from "../../climatesLogo.png";

function App() {
  const [inputData, setInputData] = useState(data);
  console.log(inputData);
  return (
    <div className="App">
      <img src={climatesLogo} alt="Climates logo" />
      <AddEvent inputData={inputData} setInputData={setInputData} />
      <EventList inputData={inputData} setInputData={setInputData} />
    </div>
  );
}

export default App;
