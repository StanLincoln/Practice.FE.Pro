import React from "react";
import { useContext } from "react";
import { DwarfContext } from "../context/dwarfContext";
import { useSelector } from "react-redux";

export default function HomePage() {

  const currentParticipants = useSelector((state) => state.participants)

  const {participants} = useContext(DwarfContext);
  return (
    <div>
      <h1>Welcome, brave dwarf!</h1>
      <p>You can apply your CV here!</p>
<h3>Hello, there are {currentParticipants} participants now!</h3>
      <div>
        {participants && participants.map( item => {
          return <p key={item.dwarfName}>{item.dwarfName}</p>
        })}
      </div>
    </div>
  );
}