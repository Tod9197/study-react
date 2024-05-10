import Head from "next/head";
import { Inter } from "next/font/google";
import { Main } from "../components/Main/Main";
import { Header } from "../components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export default function About({
  doubleCount,
  isShow,
  handleClick,
  handleDisplay,
  text,
  array,
  handleChange,
  handleAdd,
}) {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      {isShow ? <h2 style={{ textAlign: "center" }}>{doubleCount}</h2> : null}

      <button
        style={{ display: "block", margin: "auto", width: "200px" }}
        href="/about"
        onClick={handleClick}
      >
        カウントボタン
      </button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <Main page="about" />
    </>
  );
}
