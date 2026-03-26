import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <nav className={styles.sectionLinks}>
            <span className={styles.label}>Modules</span>
            <div className={styles.linkGrid}>
              <a href="#section-01" className={styles.link}>0.1</a>
              <a href="#section-02" className={styles.link}>0.2</a>
              <a href="#section-03" className={styles.link}>0.3</a>
              <a href="#section-04" className={styles.link}>0.4</a>
            </div>
          </nav>
          <a href="#quiz-placeholder" className={styles.quizBtn}>
            Review Quiz →
          </a>
        </div>
        <div className={styles.divider} />
        <p className={styles.credits}>
          Created by: Arya, Vikram, Pranet, Charlye, &amp; Ayaan &nbsp;|&nbsp; AP Psych Period 8 - Fischer 
        </p>
      </div>
    </footer>
  );
}
