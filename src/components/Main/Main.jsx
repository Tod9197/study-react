import { Inter } from "next/font/google";
import classes from "./Main.module.css";
import { Links } from "../Links/Links";
import { Headline } from "../Headline/Headline";
import { useCallback, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const ITEMS = [
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Docs \u2192 ",
    description: "Find in-depth information about Next.js features",
  },
  {
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Learn \u2192 ",
    description: " Learn about Next.js in an interactive course with quizzes!",
  },
  {
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Templates \u2192 ",
    description: "Discover and deploy boilerplate example Next.js projects.",
  },
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy \u2192",
    description:
      "Instantly deploy your Next.js site to a shareable URL with Vercel.",
  },
];

export function Main(props) {
  const [items, setItems] = useState(ITEMS);
  const handleReduce = useCallback(() => {
    setItems((prevItems) => {
      return prevItems.slice(0, prevItems.length - 1);
    });
  }, []);
  return (
    <>
      <main className={`${classes.main} ${inter.className}`}>
        <Headline page={props.page} handleReduce={handleReduce}>
          {<code className={classes.code}>{items.length}</code>}
        </Headline>
        <Links items={items} handleReduce={handleReduce} />
      </main>
    </>
  );
}
