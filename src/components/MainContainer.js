import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stockList, setStockList] = useState([]);
  const [boughtStocks, setBoughtStocks] = useState([]);

  useEffect(() => {
      resetSearch();
  }, [])

  function buyStock(item) {
    if (!boughtStocks.includes(item)) {
      setBoughtStocks([...boughtStocks, item])
    } else {
      const deleteList = boughtStocks.filter(e => e.id !== item.id);
      setBoughtStocks(deleteList);
    }
  }

  function sortAlphabetically() {
    const alphaSortList = stockList.toSorted((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    setStockList(alphaSortList);
  }

  function sortByPrice() {
    const costSortList = stockList.toSorted((a, b) => a.price - b.price);
    setStockList(costSortList);
  }

  function filterByType(value) {
    fetch(`http://localhost:3001/stocks`)
      .then(resp => resp.json())
      .then(data => {
        const filteredList = data.filter(e => e.type === value);
        setStockList(filteredList)
      })
  }

  function resetSearch() {
    fetch(`http://localhost:3001/stocks`)
      .then(resp => resp.json())
      .then(data => setStockList(data))
  }

  return (
    <div>
      <SearchBar
        sortAlphabetically={sortAlphabetically}
        sortByPrice={sortByPrice}
        filterByType={filterByType}
        resetSearch={resetSearch}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer stockList={stockList} buyStock={buyStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer boughtStocks={boughtStocks} buyStock={buyStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
