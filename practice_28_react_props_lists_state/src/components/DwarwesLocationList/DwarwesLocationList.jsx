import DwarwesLocationItem from "../DwarwesLocationItem/DwarwesLocationItem";


function DwarwesLocationList({ locations }) {
  return (
    <div>
      {locations.map((location) => (
        <DwarwesLocationItem key={location.locationName} {...location} />
      ))}
    </div>
  );
}

export default DwarwesLocationList;