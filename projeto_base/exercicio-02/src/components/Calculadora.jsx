import React, { useState } from "react";

export function Calculadora() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [operacao, setOperacao] = useState("+");
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const num1 = Number(numero1);
    const num2 = Number(numero2);

    let res;
    switch (operacao) {
      case "+":
        res = num1 + num2;
        break;
      case "-":
        res = num1 - num2;
        break;
      case "*":
        res = num1 * num2;
        break;
      case "/":
        res =   num1 / num2 ;
        break;
      default:
        res = "Operação inválida.";
    }

    setResultado(res);
  };

  return (
    <div>
      <h1>Calculadora</h1>
      <input
        type="number"
        placeholder="Digite o 1º número"
        value={numero1}
        onChange={(e) => setNumero1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Digite o 2º número"
        value={numero2}
        onChange={(e) => setNumero2(e.target.value)}
      />
      <select value={operacao} onChange={(e) => setOperacao(e.target.value)}>
        <option value="+">Somar</option>
        <option value="-">Subtrair</option>
        <option value="*">Multiplicar</option>
        <option value="/">Dividir</option>
      </select>
      <button onClick={calcular}>Calcular</button>
      <h2>Resultado: {resultado !== null ? resultado : "" }</h2>
    </div>
  );
}