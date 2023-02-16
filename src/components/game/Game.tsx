import { Variant } from "./variant/Variant";
// @ts-ignore
import styles from "./Game.module.scss";
import { questions } from "../../date/date";

interface IGame {
  question?: string;
}

export const Game = ({ question }: IGame) => {
  return (
    <div className={styles.container}>
      <div className={styles.progress}>
        <div className={styles.progressActive} style={{ width: "50%" }} />
      </div>
      <div className={styles.title}>{question}</div>
      <div className={styles.wrapperItems}>
        <Variant answer="Функция" />
        <Variant answer="Глобальный стейт" />
        <Variant answer="Никому не нужен" />
      </div>
    </div>
  );
};
