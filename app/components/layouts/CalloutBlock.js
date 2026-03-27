import styles from "./CalloutBlock.module.css";

export default function CalloutBlock({ children, label }) {
  return (
    <div className={styles.callout}>
      {label && <span className={styles.label}>{label}</span>}
      <div className={styles.body}>{children}</div>
    </div>
  );
}
