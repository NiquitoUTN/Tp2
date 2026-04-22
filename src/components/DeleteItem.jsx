import "../App.css";
export default function DeleteItem ({onDelete}){
return(
    <button type="button" onClick={onDelete}> X </button>
)
}