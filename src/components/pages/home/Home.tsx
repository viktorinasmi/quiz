import { Game } from "../../game";
import { Result } from "../../result";
import React from "react";
// @ts-ignore
import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <div className={styles.container}>
      <Game question="Что такое Use State?" />
      <Result />
    </div>
  );
};
