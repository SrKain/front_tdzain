import styles from "./Banner.module.css";

export default function Banner({ data }) {
  return (
    <section className={styles.Banner}>
      <div className={styles.ImageContainer}>
        <img className={styles.Img} src={data.img} alt="" />
      </div>
      <h2>{data.nome}</h2>
    </section>
  );
}
