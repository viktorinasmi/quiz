import { Button } from "./button";
// @ts-ignore
import styles from "./Result.module.scss";

export const Result = () => {
  return (
    <div className={styles.container}>
      <img src="icons/confetti.png" alt="icon" width={80} height={80} />
      <div className={styles.title}>Вы отгадали 3 ответа из 10 </div>
      <div className={styles.wrapperBtn}>
        <Button title="Попробовать снова" />
      </div>
    </div>
  );
};
