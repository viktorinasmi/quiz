import { Game } from "../../game";
import { Result } from "../../result";
import React, { useState } from "react";
// @ts-ignore
import styles from "./Home.module.scss";
import { questions } from "../../../data/data";

export const Home = () => {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  const onClickVariant = (index: any) => {
    // console.log(step, index);
    setStep(step + 1);
    if (index === question.correct) setCorrect(correct + 1);
  };

  return (
    <div className={styles.container}>
      {step !== questions.length ? (
        <Game onClick={onClickVariant} question={question} step={step} />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
};
