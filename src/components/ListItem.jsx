import React, { useState } from 'react';
import "../App.css";
import DeleteItem from "./DeleteItem"; 

export default function ListItem({ label, onDelete, onEdit }) {
  const [count, setCount] = useState(1);
  
  // Nuevos estados para la edición
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(label);

  function plusOne(e) {
    e.preventDefault(); 
    setCount(count + 1);
  }

  function minusOne(e) {
    e.preventDefault(); 
    setCount(count - 1);
  }

  function handleSaveEdit(e) {
    e.preventDefault(); // Evitamos que haga submit el formulario
    if (editedName.trim() === "") return; // Evita guardar nombres vacíos
    
    onEdit(editedName); // Le mandamos el nuevo nombre al padre
    setIsEditing(false); // Salimos del modo edición
  }

  // SI ESTAMOS EN MODO EDICIÓN, MOSTRAMOS ESTA VISTA:
  if (isEditing) {
    return (
      <div className="list-item">
        <input 
          value={editedName} 
          onChange={(e) => setEditedName(e.target.value)} 
          autoFocus // Hace que el cursor se ponga automáticamente acá
        />
        <button type="button" onClick={handleSaveEdit}>📁</button>
        <button type="button" onClick={() => setIsEditing(false)}>❌</button>
      </div>
    );
  }

  // VISTA NORMAL (La que ya tenías, pero con el botón Editar):
  return (
    <div className="list-item">
      <label>{label}</label>
      <button disabled={count === 1} onClick={minusOne}>➖</button>
      
      {/* Como el 'name' es el label, si cambias el nombre, se actualiza perfecto en el Checkout */}
      <input name={label} value={count} readOnly /> 
      
      <button onClick={plusOne}>➕</button>
      
      {/* Botón para activar el modo edición */}
      <button type="button" onClick={() => setIsEditing(true)}>✏️</button>
      
      <DeleteItem onDelete={onDelete} />
    </div>
  );
}