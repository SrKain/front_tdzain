import { useState } from "react";
import styles from "./Content.module.css";

export default function Content({ user }) {
  const [edit, setEdit] = useState(true);
  const [profile, setProfile] = useState();
  return (
    <section className={styles.section}>
      <input
        autoComplete="name"
        type="name"
        onChange={(event) =>
          setProfile({ ...profile, nome: event.target.value })
        }
        disabled={edit}
      />
      <button
        onClick={() => {
          setEdit(!edit);
        }}
      >
        EDITAR
      </button>
      <button
        onClick={() => {
          console.log(profile);
        }}
      >
        LOG
      </button>
    </section>
  );
}
