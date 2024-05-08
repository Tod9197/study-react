import Head from "next/head";
import { Inter } from "next/font/google";
import { Main } from "../components/Main/Main";
import { Header } from "../components/Header/Header";
import { useCallback } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const foo = 1;

  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  }, []);

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Main page="index" />
      <Link
        style={{ display: "block", margin: "auto", width: "200px" }}
        href="/about"
        onClick={handleClick}
      >
        ボタン
      </Link>
    </>
  );
}
