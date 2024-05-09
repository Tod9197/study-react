import Head from "next/head";
import { Inter } from "next/font/google";
import { Main } from "../components/Main/Main";
import { Header } from "../components/Header/Header";
import { useCallback, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((count) => count + 1);
    }
  }, [count]);

  const handleDisplay = useCallback(() => {
    setIsShow((isShow) => !isShow);
  }, []);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字以内にしてください");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      {isShow ? <h2 style={{ textAlign: "center" }}>{count}</h2> : null}

      <button
        style={{ display: "block", margin: "auto", width: "200px" }}
        href="/about"
        onClick={handleClick}
      >
        ボタン
      </button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={handleChange} />
      <Main page="index" />
    </>
  );
}
