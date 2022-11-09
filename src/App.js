import React from "react";

//data
import data from "./data";

// Comp
import Card from "./comp/card";
import FilterNavBar from "./comp/filter_nav_bar";

let catList = [];

for (var i = 0; i < data.length; i++) {
  catList.push(data[i]["category"]);
}

const uniqueCatList = new Set(catList);

const buttonList = [...uniqueCatList].map((item) => (
  <FilterNavBar cat={item} onClickFilterButton={FilterButton} />
));

function FilterButton() {
  alert("working");
}

function App() {
  const cardsList = data.map((item) => <Card {...item} />);

  return (
    <div className="app">
      <h1 className="app--title">Our Menu</h1>
      <div className="app--underline"></div>
      <div className="app--filter">{buttonList}</div>
      <div className="app--content">{cardsList}</div>
    </div>
  );
}

export default App;
