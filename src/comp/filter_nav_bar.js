import React from "react";

function FilterNavBar({ cat, onClickFilterButton }) {
  return (
    <button className="filter--button" onClick={onClickFilterButton}>
      {cat}
    </button>
  );
}

export default FilterNavBar;
