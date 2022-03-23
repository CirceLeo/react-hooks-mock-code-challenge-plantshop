import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantsArray}) {
  const renderedPlants = plantsArray.map(plant => {
    return <PlantCard key={plant.id} plant={plant} />
  })
  return (
    <ul className="cards">{renderedPlants}</ul>
  );
}

export default PlantList;
