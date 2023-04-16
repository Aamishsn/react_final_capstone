import React, { useState } from "react";

function Check() {
  const [items, setItems] = useState([]);

  function addItem() {
    setItems([...items, "New Item"]);
  }
  const miles = 100;
  const conversionFactor = 1.7;
  return (
    <div>
           <p>The distance is {miles * conversionFactor}km.</p>


export default Greeter;
    </div>
  );
}

export default Check;
