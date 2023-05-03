import React from "react";
import Stock from "./Stock";

function StockContainer({ stockList, buyStock }) {

  const stockContainerList = stockList.map(e => <Stock key={e.id} item={e} buyStock={buyStock} />)
  return (
    <div>
      <h2>Stocks</h2>
      {stockContainerList}
    </div>
  );
}

export default StockContainer;
