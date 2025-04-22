const historico = [];

function calcular(botao) {
  const inputNum1 = document.getElementById("input-num1");
  const inputNum2 = document.getElementById("input-num2");
  const resultadoSection = document.getElementById("section-resultado");
  const historicoDiv = document.getElementById("div-historico");
  const sectionHistorico = document.getElementById("section-historico");

  inputNum1.type = "number";
  inputNum2.type = "number";

  const adicionarHistorico = (operacao) => {
    const novoItem = document.createElement("div");
    novoItem.textContent = operacao;

    historicoDiv.appendChild(novoItem);
    historicoDiv.style.display = "block";

    const sectionHistorico = document.getElementById("section-historico");
    sectionHistorico.style.display = "block";
  };

  const realizarCalculo = (operacao) => {
    const num1 = parseFloat(inputNum1.value);
    const num2 = parseFloat(inputNum2.value);

    if (isNaN(num1) || isNaN(num2)) {
      resultadoSection.textContent =
        "Informe os 2 números para realizar a operação";
      return;
    }

    let resultado;
    let textoResultado;

    if (operacao === "somar") {
      resultado = num1 + num2;
      textoResultado = `Resultado: ${num1} mais ${num2} = ${resultado}`;
    } else if (operacao === "subtrair") {
      resultado = num1 - num2;
      textoResultado = `Resultado: ${num1} menos ${num2} = ${resultado}`;
    } else if (operacao === "multiplicar") {
      resultado = num1 * num2;
      textoResultado = `Resultado: ${num1} vezes ${num2} = ${resultado}`;
    } else if (operacao === "dividir") {
      resultado = num1 / num2;
      textoResultado = `Resultado: ${num1} dividido por ${num2} = ${resultado}`;
    }

    resultadoSection.textContent = textoResultado;
    adicionarHistorico(textoResultado);
  };

  const botaoSomar = document.getElementById("btn-somar");
  const botaoSubtrair = document.getElementById("btn-subtrair");
  const botaoMultiplicar = document.getElementById("btn-multiplicar");
  const botaoDividir = document.getElementById("btn-dividir");

  botaoSomar.textContent = "Somar➕";
  botaoSubtrair.textContent = "Subtrair➖";
  botaoMultiplicar.textContent = "Multiplicar✖";
  botaoDividir.textContent = "Dividir➗";

  botaoSomar.addEventListener("click", () => realizarCalculo("somar"));
  botaoSubtrair.addEventListener("click", () => realizarCalculo("subtrair"));
  botaoMultiplicar.addEventListener("click", () =>
    realizarCalculo("multiplicar")
  );
  botaoDividir.addEventListener("click", () => realizarCalculo("dividir"));
}

document.addEventListener("DOMContentLoaded", calcular);
