import React from "react";
import Link from "next/link";
import styles from "./about.module.scss";

export const metadata = {
  title: "SIH-UI | About",
  description: "SIH-UI",
};

const page = () => {
  return (
    <div>
      <main className={styles.top}>
        <h1>about page</h1>
        <Link href="/">Home</Link>
      </main>
    </div>
  );
};

export default page;
