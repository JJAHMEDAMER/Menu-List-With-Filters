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

function App() {
  const [menuList, setMenuList] = React.useState(data);
  const cardsList = menuList.map((item) => <Card {...item} />);

  const buttonList = ["All", ...uniqueCatList].map((item) => (
    <FilterNavBar cat={item} onClickFilterButton={FilterButton} />
  ));

  function FilterButton(cat) {
    if (cat === "All") {
      setMenuList(data);
    } else {
      const filteredCardsList = data.filter((item) => item.category === cat);
      setMenuList(filteredCardsList);
    }
  }
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
