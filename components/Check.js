import React, { useState } from "react";

function Check() {
  const [items, setItems] = useState([]);

  function addItem() {
    setItems([...items, "New Item"]);
  }

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Check;
