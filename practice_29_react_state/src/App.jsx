import "./App.css";
import SimpleList from "./components/simpleList/SimpleList";
import DwarwesLocationList from "./components/dwarwesLocations/DwarwesLocationList";
import { useState } from "react";
import DwarfHireForm from "./components/DwarfHireForm/DwarfHireForm";

function App() {
  const [count, setCount] = useState(0);
  const [dwarves, setDwarves] = useState([`Dvalin`, `Balin`, `Torin`]);

  const increaseHandler = () => {
    setCount((prev) => prev + 1);
    // setCount(prev => prev + 1) будет доб. +2
  };

  const handleHireDwarf = (newDwarfName) => {
    setDwarves((prevDwarves) => [...prevDwarves, newDwarfName]);
  };

  const fireDwarf = () => {
    setDwarves(prevDwarves => prevDwarves.slice(0, -1));
  };

  const handleFireDwarf = (dwarfName) => {
    setDwarves(dwarves.filter((dwarf) => dwarf !== dwarfName));
  };

  return (
    <>
      <div className="App">
        <p>Hello World! {new Date().toLocaleDateString()}</p>
        <h2>Welcome, Guest!</h2>

        <SimpleList
          listHeaderText="Torin's troop"
          listSource={dwarves}
          onFireDwarf={handleFireDwarf}
        />
        <DwarfHireForm onHireDwarf={handleHireDwarf}/>

        <button onClick={fireDwarf}>Fire Last Dwarf</button>
        <p>{count}</p>
        <button onClick={increaseHandler}>Plus</button>
        <button onClick={() => setCount(count - 1)}>Minus</button>
      </div>
    </>
  );
}

export default App;
