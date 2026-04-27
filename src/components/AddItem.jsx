import React, { useState } from "react";
import "../App.css";

export default function AddItem({ items, setItems }) {
  const [newItemName, setNewItemName] = useState("");

  function handleChange(e) {
    setNewItemName(e.target.value);
  }

  function handleButton(e) {
    
    if (newItemName.trim() === "") return; 

    let newItem = {
      "item": newItemName
    };
    
    
    setItems(items.concat([newItem])); 
    setNewItemName("");
  }

  return (
    <div>
      <input className="add-label" value={newItemName} onChange={handleChange} />
      <button className='shopping-button' type="button" onClick={handleButton}>Agregar</button>
    </div>
  );
}