import "./App.css";
import { useEffect, useState } from "react";
import Header from "./componentes/Header";
import Banner from "./componentes/Banner";

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

  console.log(user);

  return (
    <main className="App">
      <Header />
      <Banner ProfileImg={user.img} />
    </main>
  );
}
