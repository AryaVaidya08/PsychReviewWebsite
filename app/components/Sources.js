import styles from "./Sources.module.css";

const sources = [
  {
    label: "Myers' Psychology for AP",
    url: null,
  },
  {
    label: "Britannica — The Scientific Method",
    url: "https://www.britannica.com/science/scientific-method",
  },
  {
    label: "Qualtrics — Sampling Methods",
    url: "https://www.qualtrics.com/articles/strategy-research/sampling-methods/",
  },
  {
    label: "Verywell Mind — Correlational Research",
    url: "https://www.verywellmind.com/correlational-research-2795774",
  },
  {
    label: "MIT Press — The Scientific Attitude: Defending Science from Denial, Fraud, and Pseudoscience",
    url: "https://direct.mit.edu/books/book/4317/The-Scientific-AttitudeDefending-Science-from",
  },
];

export default function Sources() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Sources</h2>
        <ol className={styles.list}>
          {sources.map((src, i) =>
            src.url ? (
              <li key={i} className={styles.item}>
                <a href={src.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  {src.label}
                </a>
              </li>
            ) : (
              <li key={i} className={styles.item}>
                <span>{src.label}</span>
              </li>
            )
          )}
        </ol>
      </div>
    </section>
  );
}
