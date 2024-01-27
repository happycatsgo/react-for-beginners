import {ChangeEvent, useEffect, useState} from "react";

interface ICoinInfo {
  id: string,
  name: string,
  symbol: string,
  quotes: { USD: { price: number } }
}

function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState<ICoinInfo []>([]);
  const [amount, setAmount] = useState(0);
  const [exchageRate, setExchageRate] = useState(1);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers").then(response => response.json())
      .then(json => {
        setCoins(json);
        setLoading(false);
        console.log(json);
      });
  }, []);

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    console.log(amount);
    const temp = parseInt(event.target.value);
    setAmount(temp ? temp : 0);
  }

  function onChangeSelect(event: ChangeEvent<HTMLSelectElement>) {
    const index = event.target.selectedIndex;
    const selected = event.target[index];
    if (selected instanceof HTMLOptionElement) {
      setExchageRate(parseFloat(selected.value));
    }
  }

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> :
        <div>
          <input
            onChange={onChange}
            value={amount}
            type="text"
            placeholder="Write your to do..."
          />
          <p>
            = {amount / exchageRate}
          </p>
          <select onChange={onChangeSelect}>
            <option key="00" value="1">Select coin to convert</option>
            {coins.map((coin) => (
              <option key={coin.id} value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol}: ${coin.quotes.USD.price} USD)
              </option>
            ))}
          </select>
        </div>}
    </div>
  );
}

export default CoinTracker;