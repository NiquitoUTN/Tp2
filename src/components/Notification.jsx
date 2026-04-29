import React from 'react';
import '../App.css'; 

export default function Notification({ isOpen, data, onClose }) {
  if (!isOpen) return null;

  // Object.entries convierte tu objeto en un arreglo de pares [llave, valor]
  // Para poder recorrerlo con .map()
  const dataArray = Object.entries(data);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>¡Se Reinicio la Lista!</h2>
        <p>Los productos que estaban en la lista son:</p>
        
        <ul>
          {dataArray.map(([nombreProducto, cantidad]) => (
            <li key={nombreProducto}>
              <strong>{cantidad}x</strong> {nombreProducto}
            </li>
          ))}
        </ul>

        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}