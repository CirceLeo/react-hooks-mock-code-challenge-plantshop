import React, { useState } from "react";

function PlantCard({plant}) {
  const {image, name, price} = plant
  const [inStock, setInStock] = useState(true)
  function handleInStock(){
    setInStock(!inStock)
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
    </li>
  );
}

export default PlantCard;
