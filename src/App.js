import Api from "./component/header/header";
import { useEffect, useState } from "react";
import Converter from "./component/converter/converter";
import "./App.css";
function App() {
  const [valueСurrency, setValueСurrency] = useState({});

  useEffect(() => {
    fetch(
      "https://freecurrencyapi.net/api/v2/latest?apikey=929170f0-8616-11ec-aa17-650d2375d635&base_currency=UAH"
    )
      .then((res) => res.json())
      .then((res) => setValueСurrency(res.data));
  }, []);
  return (
    <div className="blok">
      <header className="header">
        <Api valueСurrency={valueСurrency} />
      </header>
      <main className="container">
        <Converter numberСurrency={valueСurrency} />
      </main>
    </div>
  );
}

export default App;
