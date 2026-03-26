import styles from "./TextLeft_GraphicTopRight_CaptionBottomRight.module.css";
import Placeholder from "./Placeholder";

export default function TextLeft_GraphicTopRight_CaptionBottomRight({
  children,
  graphic,
  caption,
}) {
  return (
    <div className={styles.layout}>
      <div className={styles.text}>{children}</div>
      <div className={styles.rightCol}>
        <div className={styles.graphicSlot}>
          {graphic || <Placeholder />}
        </div>
        {caption && <p className={styles.caption}>{caption}</p>}
      </div>
    </div>
  );
}
