import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#top" className={styles.brand}>
          <img src="/acorn.svg" alt="AP Acorn" className={styles.acorn} />
          <span className={styles.brandText}>AP Psych Review 0.1 – 0.4</span>
        </a>
        <nav className={styles.nav}>
          <a href="https://play.blooket.com/play?hwId=69c70de87b80dd29911467fe" target="_blank" className={styles.quizBtn}>Quiz →</a>
        </nav>
      </div>
    </header>
  );
}
