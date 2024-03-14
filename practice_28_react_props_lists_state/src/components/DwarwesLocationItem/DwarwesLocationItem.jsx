function DwarwesLocationItem({locationName, population, king}) {

    const handleClick = (event) => {
        console.log(`location ${locationName}, king ${king}`);
        console.log(event.target);
      };

  return (
    <div className="dwarwesLocationItemContainer" onClick={handleClick}>
      <h4 className="locationItemHeader">{locationName}</h4>
      <p className="locationItemPopulation">{population}</p>
      <p className="locationItemKing">{king}</p>
    </div>
  );
}

export default DwarwesLocationItem;
