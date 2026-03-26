import styles from "./TextOnly.module.css";

export default function TextOnly({ col1, col2, children }) {
  if (col1 && col2) {
    return (
      <div className={styles.twoCol}>
        <div className={styles.col}>{col1}</div>
        <div className={styles.col}>{col2}</div>
      </div>
    );
  }
  return <div className={styles.single}>{children}</div>;
}
