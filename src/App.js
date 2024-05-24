import "./App.css";
import Header from "./componentes/Header";
import Banner from "./componentes/Banner";
import Footer from "./componentes/Footer";
import Content from "./componentes/Content";
import { useQuery, useMutation } from "react-query";

export default function App() {
  const { data, isLoading, isError } = useQuery("user", () =>
    fetch("http://localhost:1000/user").then((response) => response.json())
  );
  const mutation = useMutation({
    mutationFn: (profile) => {
      fetch("http://localhost:1000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
      }).then((response) => response.data);
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error)=>{
      console.error(error)
    }
  });
  if (isLoading) {
    return <h1>Carregando...</h1>;
  }
  if (isError) {
    return <h1>Algo deu errado...</h1>;
  }

  return (
    <main className="App">
      <Header userName={data ? data.nome : ""} />
      <Banner data={data ? data : {}} />
      <Content
        submit={(profile) => mutation.mutate(profile)}
        data={{ ...data }}
      />
      <Footer />
    </main>
  );
}
