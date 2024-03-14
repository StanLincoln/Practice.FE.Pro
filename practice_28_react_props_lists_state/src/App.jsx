import "./App.css";
import { SimpleParagraph } from "./components/simpleParagraph/SimpleParagraph";
import LoginForm from "./components/LoginForm";
import SimpleList from "./components/simpleList/SimpleList";
import DwarwesLocationItem from "./components/DwarwesLocationItem/DwarwesLocationItem";
import DwarwesLocationList from "./components/DwarwesLocationList/DwarwesLocationList";
import { useState } from "react";

function App() {
  const [simpleState, setSimpleState] = useState("Hello from simpleState!");

  const [appTheme, setAppTheme] = useState("dark");

  const dwarwesLocations = [
    {
      locationName: "Iron Hills",
      population: 30000,
      king: "Dain Ironfoot",
    },
    {
      locationName: "Erebor",
      population: 30000,
      king: "Train",
    },
    {
      locationName: "Moria",
      population: 30000,
      king: "Durin",
    },
  ];

  const handleClick = () => {
    setSimpleState((text) => text.toUpperCase());
  };

  const toggle = () => {
    setAppTheme((theme) => (theme === 'light' ? 'dark' : 'light'))
  }

  const inputChange = (event) => {
      const value = event.target.value
      console.log(value);
  }

  return (
    <>
      <div className="App">
        <p>Hello World! {new Date().toLocaleDateString()}</p>
        <h2>Welcome, Guest!</h2>

        <SimpleParagraph textContent={simpleState} currentTheme={appTheme} />

        <button onClick={handleClick}>Up</button>
        <button onClick={toggle}>{appTheme}</button>

        <LoginForm />

        <SimpleList
          listHeaderText="MiddleEarth nations"
          listSource={["Dwarwes", "Elves", "Orcs"]}
          theme={appTheme}
        />

        <DwarwesLocationItem />
        <DwarwesLocationList locations={dwarwesLocations} />

        <input type="text" onChange={inputChange}/>
      </div>
    </>
  );
}

export default App;
