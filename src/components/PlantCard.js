import React, { useState } from "react";

function PlantCard({plant, onDelete}) {

  const {image, name, price, id} = plant
  const [inStock, setInStock] = useState(true)
  function handleInStock(){
    setInStock(!inStock)
  }

  function handleDelete(){
    onDelete(id)
    // event.target.parentNode.remove()

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
    </li>
  );
}

export default PlantCard;
