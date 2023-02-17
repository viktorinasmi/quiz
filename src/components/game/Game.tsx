import React from "react";
import { Variant } from "./variant/Variant";
// @ts-ignore
import styles from "./Game.module.scss";
import { questions } from "../../date/date";
import { useState } from "react";

export const Game = () => {
  const [step, setStep] = useState(0);
  const question = questions[step];

  const onClickVariant = (index: any) => {
    console.log(step, index);
    setStep(step + 1);
  };

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
        {question?.variants.map((text, index) => (
          <Variant
            onClick={() => onClickVariant(index)}
            key={text}
            answer={text}
          />
        ))}
      </div>
    </div>
  );
};
