import { Game } from "../../game";
import { Result } from "../../result";
import React, { useState } from "react";
// @ts-ignore
import styles from "./Home.module.scss";
import { questions } from "../../../date/date";

export const Home = () => {
  const [step, setStep] = useState(0);
  console.log(questions.length - 1);
  return (
    <div className={styles.container}>
      {step !== questions.length - 1 ? <Game /> : <Result />}
    </div>
  );
};
