import React from "react";

//data
import data from "./data"

// Comp
import Card from "./comp/card"

function App() {
  return (
    <div>
      <h1>Our Menu</h1>
      <Card {...data[1]}/>
    </div>
  );
}

export default App;
