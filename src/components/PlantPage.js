import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantsArray, setPlantsArray] = useState([])
  const [search, setSearch] = useState('')

  function addNewPlant(plantObj){
    setPlantsArray([...plantsArray, plantObj])
  }

  useEffect(() => {
  fetch('http://localhost:6001/plants')
  .then(resp => resp.json())
  .then(plants => setPlantsArray(plants))
  }, [])

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant} />
      <Search setSearch={setSearch}/>
      <PlantList search={search} plantsArray={plantsArray} />
    </main>
  );
}

export default PlantPage;
