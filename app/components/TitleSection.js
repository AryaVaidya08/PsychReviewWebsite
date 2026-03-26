import styles from "./TitleSection.module.css";
import ScrollArrow from "./ScrollArrow";

export default function TitleSection() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.title}>Research Methods Review (0.1 – 0.4)</h1>
        <p className={styles.byline}>By: Arya, Vikram, Pranet, Charlye, &amp; Ayaan</p>
      </div>
      <ScrollArrow />
    </section>
  );
}
