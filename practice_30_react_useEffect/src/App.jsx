import "./App.css";
import SimpleList from "./components/simpleList/SimpleList";
import DwarwesLocationList from "./components/dwarwesLocations/DwarwesLocationList";
import { useEffect, useState } from "react";

function App() {
  const [dwarwes, setDwarwes] = useState(JSON.parse(localStorage.getItem("dwarwes")) ?? [`Dvalin`, `Balin`, `Torin`]);
  const [dwarfName, setDwarfName] = useState("");
  const [isListShown, setIsListShown] = useState(true);
  const [time, setTime] = useState(new Date().toLocaleString())
  
  const toggleVisibility = () => {
    setIsListShown(prev => !prev)
  };

  useEffect(() => {
    const currentTime = setInterval(() => {
      setTime(new Date().toLocaleString())
    }, 1000)

    return () => {
      clearInterval(currentTime)
    }
  }, [])

  const saveToStorage = () => {
    localStorage.setItem("dwarwes", JSON.stringify(dwarwes));
  }

  return (
    <>
      <div className="App">
        <h2>Welcome, Guest!</h2>
        <p>{time}</p>
        <button onClick={toggleVisibility}>Show dwarves</button>
        {isListShown && (
          <SimpleList listHeaderText="Torin's troop" listSource={dwarwes} />
        )}

        <input
          id="dwarfName"
          value={dwarfName}
          onChange={(event) => {
            setDwarfName(event.target.value);
          }}
        />
        <button
          onClick={() => {
            setDwarwes((prev) => [...prev, dwarfName]);
            setDwarfName("");
          }}
        >
          Hire Dwarf
        </button>

        <button
          onClick={() => {
            setDwarwes((prev) => prev.slice(0, -1));
          }}
        >
          Fire dwarf
        </button>
        <div>
          <button onClick={saveToStorage}>Save List</button>
        </div>
      </div>
    </>
  );
}

export default App;
