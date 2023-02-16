// @ts-ignore
import styles from "./Variant.module.scss";

interface IVariant {
  answer: string;
}

export const Variant = ({ answer }: IVariant) => {
  return <div className={styles.item}>{answer}</div>;
};
