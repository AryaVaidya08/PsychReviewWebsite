import styles from "./CardGrid.module.css";

export default function CardGrid({ cards = [], columns = 2 }) {
  return (
    <div
      className={styles.grid}
      style={{ "--cols": columns }}
    >
      {cards.map((card, i) => (
        <div key={i} className={styles.card}>
          <div className={styles.cardHeader}>
            <h4 className={styles.cardTitle}>{card.title}</h4>
          </div>
          <div className={styles.cardBody}>
            {typeof card.body === "string" ? (
              <p>{card.body}</p>
            ) : (
              card.body
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
