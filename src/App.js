import { useEffect, useState } from "react";

export default function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    fetch("http://localhost:1000/user")
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => {
        console.log("Deu errado situação", error);
      });
  }, []);

  console.log(user)

  return <div className="App">{user?<p>deu certo</p>:<p>deu errado</p>}</div>;
}
