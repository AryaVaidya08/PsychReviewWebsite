import styles from "./InfoSection.module.css";

export default function InfoSection({ id, number, title, children, variant = "light" }) {
  return (
    <section
      id={id}
      className={`${styles.section} ${variant === "dark" ? styles.dark : styles.light}`}
    >
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2 className={styles.title}>
            <span className={styles.number}>{number}: </span>{title}
          </h2>
        </div>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </section>
  );
}
