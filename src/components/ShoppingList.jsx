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
    alert(`You purchased: ${JSON.stringify(object)}`);
  }

  function handleChange(e){
    setNewItemName(e.target.value)
  }

  function deleteItem(indexToDelete){
    setItems(items.filter((_, index) => index !== indexToDelete));
    
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
        
    </div>
  );
}
