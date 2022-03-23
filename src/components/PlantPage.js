import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantsArray, setPlantsArray] = useState([])
  const [search, setSearch] = useState('')

  function addNewPlant(plantObj){
    fetch(`http://localhost:6001/plants`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
      },
      body: JSON.stringify(plantObj)
    })
    .then( res => res.json())
    .then( data => console.log(data))
    .catch( error => console.log(error.message));
    setPlantsArray([...plantsArray, plantObj])
  }

  useEffect(() => {
  fetch('http://localhost:6001/plants')
  .then(resp => resp.json())
  .then(plants => setPlantsArray(plants))
  }, [])

  function removePlantByID(plantID){
    console.log(plantID)
    fetch(`http://localhost:6001/plants/${plantID}`, {
        method: "DELETE",
    })
    // .then( res => res.json())
    // .then( data => console.log(data))
    // .catch( error => console.log(error.message));
    const filteredPlants = plantsArray.filter(plant => plant.id !== plantID)
    setPlantsArray(filteredPlants)
  }

  const searchedPlants = plantsArray.filter(plant => {
    return plant.name.toLowerCase().includes(search.toLocaleLowerCase())
  })

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant} />
      <Search setSearch={setSearch}/>
      <PlantList onDelete={removePlantByID} search={search} plantsArray={searchedPlants} />
    </main>
  );
}

export default PlantPage;
