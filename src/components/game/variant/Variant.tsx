// @ts-ignore
import styles from "./Variant.module.scss";

interface IVariant {
  answer: string;
  onClick?: () => void;
}

export const Variant = ({ answer, onClick }: IVariant) => {
  return (
    <div className={styles.item} onClick={onClick}>
      {answer}
    </div>
  );
};
