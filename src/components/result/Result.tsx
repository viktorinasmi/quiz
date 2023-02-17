import { Button } from "./button";
// @ts-ignore
import styles from "./Result.module.scss";
import { questions } from "../../data/data";

interface IResult {
  onClick?: () => void;
  correct: number;
}

export const Result = ({ onClick, correct }: IResult) => {
  return (
    <div className={styles.container}>
      <img src="icons/confetti.png" alt="icon" width={80} height={80} />
      <div className={styles.title}>
        Вы отгадали {correct} ответа из {questions.length}
      </div>
      <a href="./" className={styles.wrapperBtn}>
        <Button onClick={onClick} title="Попробовать снова" />
      </a>
    </div>
  );
};
