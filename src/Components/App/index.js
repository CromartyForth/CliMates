import "./App.css";
import AddEvent from "../AddEvent";
import EventList from "../EventList";

function App() {
  return (
    <div className="App">
      <h1>Climate</h1>
      <AddEvent />
      <EventList />
    </div>
  );
}

export default App;
