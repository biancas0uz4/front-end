import { useState } from "react";

import "./App.css";
import Card from "./Card";
import { Gerenciamento } from "./Gerenciamento";
import { Pokemon } from "./Pokemon";

function App() {
  // const [contador, setContador] = useState(0);

  // console.log("renderizou");

  // const contar = () => {
  //   setContador(contador + 1);
  //   console.log(contador);
  // };

  return (
    <>
      {/* {contador}
      {contador > 30 && " é maior que 30"} */}
      {/* <Card titulo={"João Pedro"} paragrafo={"Ele é legal"} />
      <Card titulo={"Pedro"} paragrafo={"Ele é inteligente"} />
      <Card titulo={"Fernanda"} paragrafo={"Ela é professora nota 10!"} /> */}
      {/* <button onClick={contar}>Incrementar</button> */}
      {/* <Gerenciamento /> */}

      <Pokemon/>

    </>
  );
}

export default App;
