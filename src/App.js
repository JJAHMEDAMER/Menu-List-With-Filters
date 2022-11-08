import React from "react";

//data
import data from "./data";

// Comp
import Card from "./comp/card";
import FilterNavBar from "./comp/filter_nav_bar";

const cardsList = data.map((item) => <Card {...item} />);

function App() {
  return (
    <div className="app">
      <h1 className="app--title">Our Menu</h1>
      <div className="app--underline"></div>
      <div className="app--filter">
        <FilterNavBar />
      </div>
      <div className="app--content">{cardsList}</div>
    </div>
  );
}

export default App;
