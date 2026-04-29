import React, { useState } from 'react';
import "../App.css";
import DeleteItem from "./DeleteItem"; 
import MarkAsBought from "./Mark";

export default function ListItem({ label, onDelete, onEdit }) {
  const [count, setCount] = useState(1);
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(label);

  const [isBought, setIsBought] = useState(false);

  function plusOne(e) {
    e.preventDefault(); 
    setCount(count + 1);
  }

  function minusOne(e) {
    e.preventDefault(); 
    setCount(count - 1);
  }

  function handleSaveEdit(e) {
    e.preventDefault(); 
    if (editedName.trim() === "") return; 
    
    onEdit(editedName); //mandar padre
    setIsEditing(false); 
  }

  
  if (isEditing) {
    return (
      <div className="list-item">
        <input 
          value={editedName} 
          onChange={(e) => setEditedName(e.target.value)} 
          autoFocus 
        />
        <button type="button" onClick={handleSaveEdit}>Guardar</button>
        <button type="button" onClick={() => setIsEditing(false)}>Cancelar</button>
      </div>
    );
  }

  
  return (
    
    <div className={`list-item ${isBought ? 'comprado' : ''}`}>
      
     
      <MarkAsBought 
        isBought={isBought} 
        onToggle={() => setIsBought(!isBought)} 
      />

      <label>{label}</label>
      
      <button disabled={count === 1 || isBought} onClick={minusOne}>-</button>
      <input name={label} value={count} readOnly /> 
      <button disabled={isBought} onClick={plusOne}>+</button>
      
      <button type="button" disabled={isBought} onClick={() => setIsEditing(true)}>Editar</button>
      <DeleteItem onDelete={onDelete} />
    </div>
  );
}