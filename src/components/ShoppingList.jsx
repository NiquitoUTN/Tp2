import React, { useState } from 'react';
import ListItem from './ListItem';



export function ShoppingList(props) {
  const startItems = [];

  const [items, setItems] = useState(startItems)
  const [newItemName, setNewItemName] = useState("")

  function onFormSubmit(e) {
    e.preventDefault(); 
    const formData = new FormData(e.target);
    var object = {};
    formData.forEach((value, key) => object[key] = value);
    alert(`Acabas de comprar: ${JSON.stringify(object)}`);
  }

  function handleChange(e){
    setNewItemName(e.target.value)
  }

  function deleteItem(indexToDelete){
    setItems(items.filter((_, index) => index !== indexToDelete))
  }

    
  
    function handleButton(e){
    let newItem = {
      "item": newItemName
    }
    setItems(items.concat([newItem]))
    setNewItemName("")
  }
  

  return (
    <div className='shopping-list'>
        <h1>Shopping List</h1>
        <form onSubmit={onFormSubmit}>
            {items.map((item, index) => 
                <ListItem
                key={item.item}
                label={item.item}
                maxValue={item.max}
                onDelete={() => deleteItem(index)}
              />
            )}
            <button>Checkout</button>
        </form>
        <input value={newItemName} onChange={handleChange}/><button onClick={handleButton}>Agregar</button>
    </div>
  );
}
