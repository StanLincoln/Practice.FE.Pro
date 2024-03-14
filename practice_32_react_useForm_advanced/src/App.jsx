import { useEffect, useState } from "react";
import "./App.css";
import DwarwesList from "./components/DwarwesList/DwarwesList";
import FormDwarf from "./components/FormDwarf/FormDwarf";
import DwarfForm from "./components/dwarfForm/DwarfForm";

function App() {
  const [submittedDwarf, setSubmittedDwarf] = useState([])
  const handleFormSubmit = (formData) => {
    setSubmittedDwarf([...submittedDwarf, formData])
  }

  useEffect(() => {
    const savedDwarves = JSON.parse(localStorage.getItem("submittedDwarves")) || [];
    setSubmittedDwarf(savedDwarves);
  }, []); 

  return (
    <>
      <div className="App">
        <h2>
          Welcome, Stranger! Torin the OakShield invites you to join his voyage
          to Lonely Mountain! Please, fill this form ASAP!
        </h2>
        {/* <DwarfForm /> */}
        <FormDwarf onFormSubmit={handleFormSubmit}/>
        <DwarwesList dwarwes={submittedDwarf}/>
      </div>
    </>
  );
}

export default App;
