import "../App.css";
import DeleteItem from "./DeleteItem";
import { useState } from 'react';


export default function ListItem({
  label,
  
  notifyParent = null,
  onDelete
}) {
  const [count, setCount] = useState(1);

  function plusOne(e) {
    e.preventDefault(); 
    setCount(count + 1);
    if(notifyParent){
        notifyParent(label, count + 1);
    }
  }

  function minusOne(e) {
    e.preventDefault(); 
    setCount(count - 1);
  
    if(notifyParent){
        notifyParent(label, count + 1);
    }
  }

  

  return (
    <div className="list-item">
      <label>{label}</label>
      <button disabled={count === 1} onClick={minusOne}>
        -
      </button>
      <input name={label} value={count} />
      <button onClick={plusOne}>
        +
      </button>
      <DeleteItem onDelete={onDelete} />
    </div>
  );
}
