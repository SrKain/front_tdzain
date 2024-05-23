import { CgProfile } from "react-icons/cg";
import styles from "./header.module.css";

export default function Header({ userName }) {
  return (
    <header className={styles.header}>
      <a className={styles.image_container} href="/">
        <img
          className={styles.logo}
          src="https://tdzain.com.br/wp-content/uploads/2022/05/tdzain-logo-branca.png"
          alt="Logo da TdZain"
        />
      </a>
      <h2>{userName}</h2>
      <a href="/">
        <CgProfile size={"2rem"} color="#FFFFFF" />
      </a>
    </header>
  );
}
