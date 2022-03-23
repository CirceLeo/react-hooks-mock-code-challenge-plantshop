import React, {useState} from "react";

const resetPlantObj = {
  name: '',
  image: '',
  price: 0
}

function NewPlantForm({addNewPlant}) {


  const [formData, setFormData] = useState({
    resetPlantObj
  })

  function handleFormChange(event){
    const inputName = event.target.name
    let inputValue = event.target.value
    // if ( inputName === "price" && inputValue < 0 ){
    //   inputValue = 0
    // }
    setFormData({
      ...formData,
      [inputName] : inputValue
    })
  }

  function handleFormSubmit(event){
    event.preventDefault()
    addNewPlant(formData)
    setFormData(resetPlantObj)
  }
  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleFormSubmit}>
        <input onChange={handleFormChange} value={formData.name} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleFormChange} value={formData.image} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleFormChange} value={formData.price} type="number" name="price" step="0.01" min="0" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
