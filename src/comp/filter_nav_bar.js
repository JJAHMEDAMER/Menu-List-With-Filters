import React from "react";

function FilterNavBar({ cat, onClickFilterButton }) {
  return (
    <button
      className="filter--button"
      onClick={() => onClickFilterButton(cat)}
    >
      {cat}
    </button>
  );
}

export default FilterNavBar;
