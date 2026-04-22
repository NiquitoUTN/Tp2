import "../App.css";
import DeleteItem from "./DeleteItem";
import { useState } from 'react';


export default function ListItem({
  label,
  maxValue = 10,
  notifyParent = null,
  onDelete
}) {
  const [count, setCount] = useState(0);

  function plusOne(e) {
    e.preventDefault(); // this is to avoid the form to be submitted (and the page to reload)
    setCount(count + 1);
    // if user passed a notifyParent callback
    // call it to tell the parent component
    // that the value has changed
    if(notifyParent){
        notifyParent(label, count + 1);
    }
  }

  function minusOne(e) {
    e.preventDefault(); // this is to avoid the form to be submitted (and the page to reload)
    setCount(count - 1);
    // if user passed a notifyParent callback
    // call it to tell the parent component
    // that the value has changed
    if(notifyParent){
        notifyParent(label, count + 1);
    }
  }

  

  return (
    <div className="list-item">
      <label>{label}</label>
      <button disabled={count === 0} onClick={minusOne}>
        -
      </button>
      <input name={label} value={count} />
      <button disabled={count >= maxValue} onClick={plusOne}>
        +
      </button>
      <DeleteItem onDelete={onDelete} />
    </div>
  );
}
