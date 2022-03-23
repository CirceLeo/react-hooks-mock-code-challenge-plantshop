import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantsArray, onDelete, updatePlantPrice}) {
  const renderedPlants = plantsArray.map(plant => {
    return <PlantCard onUpdate={updatePlantPrice} onDelete={onDelete} key={plant.id} plant={plant} />
  })
  return (
    <ul className="cards">{renderedPlants}</ul>
  );
}

export default PlantList;
