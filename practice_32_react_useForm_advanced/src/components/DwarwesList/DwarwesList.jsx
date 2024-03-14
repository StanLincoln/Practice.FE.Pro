// import React, { useEffect, useState } from "react";
// import { requestDwarwesList } from "../../mocks/dwarwes";

// const DwarwesList = () => {
//   const [dwarwes, setDwarwes] = useState("");

//   useEffect(() => {
//     const fetchDwarwesList = async () => {
//       try {
//         const response = await requestDwarwesList();
//         setDwarwes(response);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchDwarwesList();
//   }, []);

//   return (
//     <div>
//       <h2>Dwarwes of Thorin's Company</h2>
//       {dwarwes &&
//         dwarwes.map((dwarf) => (
//           <div key={dwarf.name}>
//             <p>Name: {dwarf.name}</p>
//             <p>Age: {dwarf.age}</p>
//             <p>Weapon: {dwarf.weapon}</p>
//             <hr />
//           </div>
//         ))}
//     </div>
//   );
// };

// export default DwarwesList;

import React, { useEffect, useState } from "react";
import { requestDwarwesList } from "../../mocks/dwarwes";
import classes from "./dwarwesList.module.css";

const DwarwesList = ({dwarwes}) => {
  const [dwarvesFromApi, setDwarvesFromApi] = useState("");

  useEffect(() => {
    const fetchDwarves = async () => {
      try {
        const response = await requestDwarwesList();
        setDwarvesFromApi(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDwarves();
  }, []);

  return (
    <div>
      <h2>Dwarwes of Thorin's Company</h2>
      {[...dwarwes, ...dwarvesFromApi].map((dwarf) => (
          <div key={dwarf.dwarfName} className={classes.dwarfCard}>
            <p className={classes.dwarfDescription}>Name: {dwarf.dwarfName}</p>
            <p className={classes.dwarfDescription}>Weapon: {dwarf.weapon}</p>
            <p className={classes.dwarfDescription}>Age: {dwarf.age}</p>
          </div>
        ))}
    </div>
  );
};

export default DwarwesList;
