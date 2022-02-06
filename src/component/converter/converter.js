import { useState } from "react";
import style from "./converter.module.css";

export default function Converter({ numberСurrency }) {
  const [sourceValue, setSourceValue] = useState(0);
  const [targetValue, setTargetValue] = useState(0);
  const [nameCurrency, setNameCarrency] = useState("UAH");
  const [nameTargetCurrency, setNameTargetCurrency] = useState("USD");

  function calculateSource(e) {
    const value = e.target.value;
    const calculation = (
      (value / numberСurrency[nameCurrency]) *
      numberСurrency[nameTargetCurrency]
    ).toFixed(2);
    setSourceValue(value);
    setTargetValue(calculation);
  }

  function calculateTarget(e) {
    const value = e.target.value;
    const calculation = (
      (value / numberСurrency[nameTargetCurrency]) *
      numberСurrency[nameCurrency]
    ).toFixed(2);
    setSourceValue(calculation);
    setTargetValue(value);
  }

  function currentСurrency(e) {
    const currentСurrency = e.target.value;
    setNameCarrency(currentСurrency);
  }
  function nameCurrentСurrency(e) {
    const currentСurrency = e.target.value;
    setNameTargetCurrency(currentСurrency);
  }

  return (
    <>
      <form className={style.form}>
        <div className={style.container}>
          <input
            className={style.input}
            type="number"
            value={sourceValue}
            onChange={calculateSource}
          />
          <select className={style.select} onClick={currentСurrency}>
            <option value="UAH">UAH</option>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
          </select>
        </div>
        <div className={style.container}>
          <input
            className={style.input}
            type="number"
            value={targetValue}
            onChange={calculateTarget}
          />
          <select className={style.select} onClick={nameCurrentСurrency}>
            <option value="USD">USD</option>
            <option value="UAH">UAH</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
      </form>
    </>
  );
}
