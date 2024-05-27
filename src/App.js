import "./App.css";
import Header from "./componentes/Header";
import Banner from "./componentes/Banner";
import Footer from "./componentes/Footer";
import Content from "./componentes/Content";
import { useQuery, useMutation, useQueryClient } from "react-query";

export default function App() {
  const queryClient = useQueryClient();
  const key = ["user"];

  const { data, isLoading, isError } = useQuery(key, () =>
    fetch("https://fake-user-api.vercel.app/user").then((response) =>
      response.json()
    )
  ); 

  const mutation = useMutation({
    mutationFn: (profile) => {
      fetch("https://fake-user-api.vercel.app/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
      }).then((response) => response.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries(key);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  if (isLoading) {
    return <h1>Carregando...</h1>;
  }
  if (isError) {
    return <h1>Algo deu errado...</h1>;
  }

  return (
    <main className="App">
      <Header />
      <Banner data={data ? data : {}} />
      <Content submit={(profile) => mutation.mutate(profile)} data={data} />
      <Footer />
    </main>
  );
}
