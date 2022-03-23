import React, { useState } from "react";

function PlantCard({plant, onDelete, onUpdate}) {

  const {image, name, price, id} = plant
  const [inStock, setInStock] = useState(true)
  const [newPrice, setNewPrice] = useState(0)
  function handleInStock(){
    setInStock(!inStock)
  }

  function handleDelete(){
    onDelete(id)
  }

  function handlePriceUpdate(){
    onUpdate(id, newPrice)
    setNewPrice(0)
  }

  function handlePriceChange(event){
    setNewPrice(event.target.value)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={handleInStock} className="primary">In Stock</button>
      ) : (
        <button onClick={handleInStock}>Out of Stock</button>
      )}
      <button onClick={handleDelete} className="removal"> Remove From Stock</button>

      <input onChange={handlePriceChange} value={newPrice} type="number" name="price" step="any" placeholder="New Price" />
      <button onClick={handlePriceUpdate}> Update Price</button>
    </li>
  );
}

export default PlantCard;
