import React from "react";
import { useSelector } from "react-redux";
import DwarfForm from "../components/dwarfForm/DwarfForm";
import { Link } from "react-router-dom";

export default function HomePage() {
  const currentParticipants = useSelector(
    (state) => state.participants.participants
  );

  return (
    <div>
      <h1>Welcome, brave dwarf!</h1>
      <p>You can apply your CV here!</p>
      <h3>Hello, there are {currentParticipants.length} now!</h3>
      <div>
        <ul>
      {currentParticipants && currentParticipants.map((dwarf) => (
         <Link to={`/weapons/${dwarf.dwarfName}`}>
         <li key={dwarf.dwarfName}>{dwarf.dwarfName}</li>
         </Link> 
        ))}
        </ul>
      </div>
    </div>
  );
}
