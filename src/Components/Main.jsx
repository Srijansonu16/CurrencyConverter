import React from "react";
import CurrenyComp from "./CurrencyComp";

const amount = [
  {
    inr: 0,
    usd: 0
  }
];
const Main = () => {
  const [currency, setCurrency] = React.useState(amount);

  const inrCallback = (amount) => {
    setCurrency({
      inr: amount,
      usd: amount * 0.012
    });
    // console.log(amount);
  };

  const usdCallback = (amount) => {
    setCurrency({
      inr: amount * 82,
      usd: amount
    });
    // console.log(amount);
  };

  return (
    <>
      <h2>
        <u style={{ color: "blueviolet" }}>Currency Converter</u>
      </h2>
      <CurrenyComp type="usd" value={currency.usd} callback={usdCallback} />
      <CurrenyComp type="inr" value={currency.inr} callback={inrCallback} />
    </>
  );
};
export default Main;
