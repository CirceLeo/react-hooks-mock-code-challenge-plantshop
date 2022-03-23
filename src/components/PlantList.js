import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantsArray, onDelete}) {
  const renderedPlants = plantsArray.map(plant => {
    return <PlantCard onDelete={onDelete} key={plant.id} plant={plant} />
  })
  return (
    <ul className="cards">{renderedPlants}</ul>
  );
}

export default PlantList;
