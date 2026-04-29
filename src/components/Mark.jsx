import React from 'react';

export default function MarkAsBought({ isBought, onToggle }) {
  return (
    <button 
      type="button" 
      onClick={onToggle}
      
      className={`button-comprado ${isBought ? 'active' : ''}`}
    >
      {isBought ? "✅" : "⬜"}
    </button>
  );
}