import { useEffect, useState } from "react";
import styles from "./Content.module.css";

export default function Content({ data, submit }) {
  const [edit, setEdit] = useState(true);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    setProfile({ ...data });
  }, [data]);

  return (
    <section className={styles.section}>
      <input
        disabled={edit}
        autoComplete="name"
        type="name"
        placeholder="insira um nome"
        value={profile.nome}
        onChange={(event) =>
          setProfile({ ...profile, nome: event.target.value })
        }
      />
      <input
        disabled={edit}
        type="text"
        placeholder="insira um CPF"
        value={profile.cpf}
        onChange={(event) =>
          setProfile({ ...profile, cpf: event.target.value })
        }
      />
      <input
        disabled={edit}
        autoComplete="email"
        type="email"
        placeholder="insira um email"
        value={profile.email}
        onChange={(event) =>
          setProfile({ ...profile, email: event.target.value })
        }
      />
      <input
        disabled={edit}
        autoComplete="postal-code"
        type="text"
        placeholder="insira um CEP"
        value={profile.cep}
        onChange={(event) =>
          setProfile({ ...profile, cep: event.target.value })
        }
      />
      <input
        disabled={edit}
        autoComplete="tel"
        type="tel"
        placeholder="insira um Telefone/Celular"
        value={profile.telefone}
        onChange={(event) =>
          setProfile({ ...profile, telefone: event.target.value })
        }
      />
      <button
        onClick={() => {
          setEdit(!edit);
        }}
      >
        EDITAR
      </button>
      <button
          onClick={(e) => {
            e.preventDefault();
          submit({ ...profile });
        }}
      >
        To Save
      </button>
    </section>
  );
}
