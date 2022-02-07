import { useEffect, useState } from "react";
import style from "./converter.module.css";

export default function Converter({ numberСurrency }) {
  const [sourceValue, setSourceValue] = useState(0);
  const [targetValue, setTargetValue] = useState(0);
  const [nameCurrency, setNameCarrency] = useState("UAH");
  const [nameTargetCurrency, setNameTargetCurrency] = useState("USD");

  useEffect(() => {
    calculateTarget(sourceValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nameCurrency]);

  useEffect(() => {
    calculateSource(targetValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nameTargetCurrency]);

  const calculateTarget = (numberInput) => {
    const calculation = (
      (numberInput / numberСurrency[nameCurrency]) *
      numberСurrency[nameTargetCurrency]
    ).toFixed(2);
    setTargetValue(calculation);
  };

  const calculateSource = (numberInput) => {
    const calculation = (
      (numberInput / numberСurrency[nameTargetCurrency]) *
      numberСurrency[nameCurrency]
    ).toFixed(2);
    setSourceValue(calculation);
  };

  return (
    <>
      <form className={style.form}>
        <div className={style.container}>
          <input
            className={style.input}
            type="number"
            value={sourceValue}
            onChange={(e) => {
              setSourceValue(e.target.value);
              calculateTarget(e.target.value);
            }}
          />
          <select
            className={style.select}
            onChange={(e) => {
              setNameCarrency(e.target.value);
            }}
          >
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
            onChange={(e) => {
              setTargetValue(e.target.value);
              calculateSource(e.target.value);
            }}
          />
          <select
            className={style.select}
            onChange={(e) => {
              setNameTargetCurrency(e.target.value);
            }}
          >
            <option value="USD">USD</option>
            <option value="UAH">UAH</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
      </form>
    </>
  );
}
