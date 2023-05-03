import React, { useState} from "react";

function SearchBar({
  sortAlphabetically,
  sortByPrice,
  filterByType,
  resetSearch
}) {

  const [alphaChecked, setAlphaChecked] = useState(false);
  const [priceChecked, setPriceChecked] = useState(false);

  function handleAlphaSort() {
    setPriceChecked(false);
    setAlphaChecked(true);
    sortAlphabetically();
  }

  function handlePriceSort() {
    setAlphaChecked(false);
    setPriceChecked(true);
    sortByPrice();
  }

  function handleFilter(e) {
    filterByType(e.target.value)
  }

  function handleReset() {
    setAlphaChecked(false);
    setPriceChecked(false);
    resetSearch();
  }

  return (
    <div>
      <button onClick={handleReset}>Reset Search</button>
      <br />
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={alphaChecked}
          onChange={handleAlphaSort}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={priceChecked}
          onChange={handlePriceSort}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
