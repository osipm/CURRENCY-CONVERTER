import style from "./header.module.css";
export default function Api({ valueСurrency }) {
  const usd = (1 / valueСurrency.USD).toFixed(2);
  const eur = (1 / valueСurrency.EUR).toFixed(2);

  return (
    <>
      <h1 className={style.title}>Курс гривні щодо іноземних валют</h1>
      <ul className={style.list}>
        <li className={style.item}>USD: {usd}</li>
        <li className={style.item}>EUR: {eur}</li>
      </ul>
    </>
  );
}
