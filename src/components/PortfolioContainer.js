import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ boughtStocks, buyStock }) {

  const portfolioContainerList = boughtStocks.map(e => <Stock buyStock={buyStock} key={e.ticker + e.id} item={e} />)

  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioContainerList}
    </div>
  );
}

export default PortfolioContainer;
