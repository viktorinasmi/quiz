import React from "react";
import { Variant } from "./variant/Variant";

// @ts-ignore
import styles from "./Game.module.scss";
import { questions } from "../../data/data";

interface IGame {
  question: any;
  step: number;
  onClick: (index: number) => void;
}

export const Game = ({ question, onClick, step }: IGame) => {
  const percentage = Math.round((step / questions.length) * 100);

  return (
    <div className={styles.container}>
      <div className={styles.progress}>
        <div
          className={styles.progressActive}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className={styles.title}>{question?.title}</div>
      <div className={styles.wrapperItems}>
        {question?.variants.map((text: any, index: any) => (
          <Variant onClick={() => onClick(index)} key={text} answer={text} />
        ))}
      </div>
    </div>
  );
};
