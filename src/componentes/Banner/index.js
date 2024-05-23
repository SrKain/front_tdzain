import styles from "./Banner.module.css";

export default function Banner({ user }) {
  return (
    <section
      className={styles.Banner}
    >
      <div className={styles.ImageContainer}>
        <img className={styles.Img} src={user.img} alt="" />
      </div>
      <h2>{user.nome}</h2>
    </section>
  );
}
