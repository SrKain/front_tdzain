import styles from "./Banner.module.css";

export default function Banner({ data }) {
  return (
    <section className={styles.Banner}>
      <div className={styles.ImageContainer}>
        <img
          className={styles.Img}
          src={`https://github.com/${data.github}.png`}
          alt=""
        />
      </div>
      <div className={styles.ContentContainer}>
        <h2>{data.nome}</h2>
        <label className={styles.Label}>
          GitHub:{""}
          <h3 className={styles.Content}>{data.github}</h3>
        </label>
        <label className={styles.Label}>
          E-mail:{""}
          <h3 className={styles.Content}>{data.email}</h3>
        </label>
      </div>
    </section>
  );
}
