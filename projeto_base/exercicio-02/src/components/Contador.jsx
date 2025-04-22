import React, {useState} from "react";

export function Contador() {

  const [contador, setContador] = useState(0);

  const incrementar = () => {
    if (contador < 30) {
      setContador(contador + 1);
    }
  };

  const getMensagem = () => {
    if (contador >= 0 && contador <= 10) {
      return "Você está longe de chegar ao 30.";
    } else if (contador > 10 && contador < 20) {
      return "Está quase lá!";
    } else if (contador >= 20 && contador < 30) {
      return "Falta pouco, você consegue!";
    } else if (contador == 30) {
      return "Você chegou em 30 cliques, parabéns!";
    }
  };

  return (
    <div>
      <h1>Contador: {contador} </h1>
      <p>{getMensagem()}</p>
      <button onClick={incrementar} disabled={contador == 30}>
        Incrementar
      </button>
    </div>
  );
}