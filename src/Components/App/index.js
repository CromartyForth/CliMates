import "./App.css";
import AddEvent from "../AddEvent";
import EventList from "../EventList";
import data from "../../data";
import {useState} from 'react';


function App() {
  const [inputData, setInputData]=useState(data)

  return (
    <div className="App">
      <h1>Climate</h1>
      <AddEvent data={inputData}/>
      <EventList data={inputData} setInputData={setInputData}/>
    </div>
  );
}

export default App;
