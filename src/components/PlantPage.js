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
    .catch( error => console.log(error.message));
    setPlantsArray([...plantsArray, plantObj])
  }

  useEffect(() => {
  fetch('http://localhost:6001/plants')
  .then(resp => resp.json())
  .then(plants => setPlantsArray(plants))
  }, [])

  function removePlantByID(plantID){
    fetch(`http://localhost:6001/plants/${plantID}`, {
        method: "DELETE",
    })
    const filteredPlants = plantsArray.filter(plant => plant.id !== plantID)
    setPlantsArray(filteredPlants)
  }

  function updatePlantPrice(plant, newPrice){
    fetch(`http://localhost:6001/plants/${plant.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        //body: {"price": newPrice}
        body: JSON.stringify({
            price: newPrice
        })
    })
    .then(() => {
      const updatedPlant = {
        ...plant,
        price: newPrice
      }
      const removeOld = plantsArray.filter(oldPlant => {return oldPlant.id !== plant.id})
     // setPlantsArray(...removeOld, updatedPlant)

    })
    }

  const searchedPlants = plantsArray.filter(plant => {
    return plant.name.toLowerCase().includes(search.toLocaleLowerCase())
  })

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant} />
      <Search setSearch={setSearch}/>
      <PlantList updatePlantPrice={updatePlantPrice} onDelete={removePlantByID} search={search} plantsArray={searchedPlants} />
    </main>
  );
}

export default PlantPage;
