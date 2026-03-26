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
          <a href="#section-01" className={styles.navLink}>0.1</a>
          <a href="#section-02" className={styles.navLink}>0.2</a>
          <a href="#section-03" className={styles.navLink}>0.3</a>
          <a href="#section-04" className={styles.navLink}>0.4</a>
        </nav>
      </div>
    </header>
  );
}
