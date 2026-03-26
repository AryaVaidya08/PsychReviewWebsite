import styles from "./GraphicLeft_TextRight.module.css";
import Placeholder from "./Placeholder";

export default function GraphicLeft_TextRight({ children, graphic }) {
  return (
    <div className={styles.layout}>
      <div className={styles.graphicCol}>
        {graphic || <Placeholder />}
      </div>
      <div className={styles.text}>{children}</div>
    </div>
  );
}
