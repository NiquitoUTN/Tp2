import React, { useState } from 'react';
import ListItem from './ListItem';
import AddItem from './AddItem';
import Notification from './Notification';

export function ShoppingList(props) {
  const [items, setItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [purchasedData, setPurchasedData] = useState({});

  function onFormSubmit(e) {
    e.preventDefault(); 
    const formData = new FormData(e.target);
    var object = {};
    formData.forEach((value, key) => {
        object[key] = value;
    });
    
    setPurchasedData(object);
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false); 
    setItems([]); 
  }

  function deleteItem(indexToDelete) {
    setItems(items.filter((_, index) => index !== indexToDelete));
  }

 
  function editItem(indexToEdit, newName) {
  
    const updatedItems = [...items];
    updatedItems[indexToEdit].item = newName;
    setItems(updatedItems);
  }

  return (
    <div className='shopping-list'>
      <h1>Shopping List</h1>
      <form onSubmit={onFormSubmit}>
        {items.map((item, index) => 
          <ListItem
            key={index}
            label={item.item}
            onDelete={() => deleteItem(index)}
            onEdit={(newName) => editItem(index, newName)}
          />
        )}
        {items.length > 0 && <button className='shopping-button' type="submit">Reiniciar</button>}
      </form>

      <AddItem items={items} setItems={setItems} />

      <Notification 
        isOpen={isModalOpen} 
        data={purchasedData} 
        onClose={handleCloseModal} 
      />
    </div>
  );
}