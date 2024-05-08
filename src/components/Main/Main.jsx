import { Inter } from "next/font/google";
import classes from "./Main.module.css";
import { Links } from "../Links/Links";
import { Headline } from "../Headline/Headline";

const inter = Inter({ subsets: ["latin"] });

export function Main(props) {
  return (
    <>
      <main className={`${classes.main} ${inter.className}`}>
        <Headline page={props.page}>
          {<code className={classes.code}>src/{props.page}.js</code>}
        </Headline>
        <Links />
      </main>
    </>
  );
}
