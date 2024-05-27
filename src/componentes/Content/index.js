import { useEffect, useState } from "react";
import styles from "./Content.module.css";

export default function Content({ data, submit }) {
  const [edit, setEdit] = useState(true);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    setProfile({ ...data });
  }, [data]);

  return (
    <section className={styles.container}>
      <form className={styles.form}>
        <label>
          {" "}
          Nome:{" "}
          <input
            disabled={edit}
            autoComplete="name"
            type="name"
            placeholder="insira um nome"
            value={profile.nome}
            onChange={(event) =>
              setProfile({ ...profile, nome: event.target.value })
            }
          />{" "}
        </label>
        <label>
          {" "}
          GitHub:{" "}
          <input
            disabled={edit}
            autoComplete="gitHub-user"
            type="text"
            placeholder="Nome de usuário no GitHub"
            value={profile.github}
            onChange={(event) =>
              setProfile({ ...profile, github: event.target.value })
            }
          />{" "}
        </label>
        <label>
          {" "}
          CPF:{" "}
          <input
            disabled={edit}
            type="text"
            placeholder="insira um CPF"
            value={profile.cpf}
            onChange={(event) =>
              setProfile({ ...profile, cpf: event.target.value })
            }
          />
        </label>
        <label>
          {" "}
          E-mail:{" "}
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
        </label>
        <label>
          {" "}
          CEP:{" "}
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
        </label>
        <label>
          {" "}
          Contato:{" "}
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
        </label>
        <button
          className={styles.button}
          style={edit ? { display: "none" } : { display: "flex" }}
          onClick={(e) => {
            e.preventDefault();
            submit({ ...profile });
            setEdit(!edit);
          }}
        >
          Salvar
        </button>
      </form>
      <button
        className={styles.button}
        onClick={(e) => {
          e.preventDefault();
          setProfile("");
          setEdit(!edit);
        }}
      >
        Editar
      </button>
    </section>
  );
}
