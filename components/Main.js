import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Links } from "./Links";
import { Headline } from "./Headline";

const inter = Inter({ subsets: ["latin"] });

export function Main(props) {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <Headline page={props.page}>
          {<code className={styles.code}>src/{props.page}.js</code>}
        </Headline>
        <Links />
      </main>
    </>
  );
}
