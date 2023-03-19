import React, { useState } from "react";
import List from "./List";
function App() {
  var [task, setTask] = useState("");
  var [item, setItem] = useState([]);

  function handleChange(event) {
    setTask(event.target.value);
  }
  function handleItem() {
    setItem((prevItem) => {
      return [...prevItem, task];
    });
    setTask("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} />
        <button onClick={handleItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((todoItem) => (
            <li>{todoItem} </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
