import styles from "./TextLeft_GraphicRight.module.css";
import Placeholder from "./Placeholder";

export default function TextLeft_GraphicRight({ children, graphic }) {
  return (
    <div className={styles.layout}>
      <div className={styles.text}>{children}</div>
      <div className={styles.graphicCol}>
        {graphic || <Placeholder />}
      </div>
    </div>
  );
}
