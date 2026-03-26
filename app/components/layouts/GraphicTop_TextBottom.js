import styles from "./GraphicTop_TextBottom.module.css";
import Placeholder from "./Placeholder";

export default function GraphicTop_TextBottom({ children, graphic }) {
  return (
    <div className={styles.layout}>
      <div className={styles.graphicRow}>
        {graphic || <Placeholder />}
      </div>
      <div className={styles.text}>{children}</div>
    </div>
  );
}
