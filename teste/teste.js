document.addEventListener('DOMContentLoaded', function() {
    const numero1 = document.getElementById('numero1');
    const numero2 = document.getElementById('numero2');
    const sectionResultado = document.getElementById('section-resultado');
    const divHistorico = document.getElementById('div-historico');
    
    const btnSomar = document.getElementById('btn-somar');
    const btnSubtrair = document.getElementById('btn-subtrair');
    const btnMultiplicar = document.getElementById('btn-multiplicar');
    const btnDividir = document.getElementById('btn-dividir');
    
    function getNumbers() {
      const val1 = numero1.value;
      const val2 = numero2.value;
      if (val1 === '' || val2 === '') {
        sectionResultado.textContent = "Informe os 2 números para realizar a operação";
        return null;
      }
      return {
        num1: parseFloat(val1),
        num2: parseFloat(val2)
      };
    }
    
    function addHistorico(entry) {
      const p = document.createElement('p');
      p.textContent = entry;
      if (divHistorico.firstChild) {
        divHistorico.insertBefore(p, divHistorico.firstChild);
      } else {
        divHistorico.appendChild(p);
      }
    }
    
    btnSomar.addEventListener('click', function() {
      const nums = getNumbers();
      if (!nums) return;
      const { num1, num2 } = nums;
      const result = num1 + num2;
      const message = `Resultado: ${num1} mais ${num2} = ${result}`;
      sectionResultado.textContent = message;
      addHistorico(message);
    });
    
    btnSubtrair.addEventListener('click', function() {
      const nums = getNumbers();
      if (!nums) return;
      const { num1, num2 } = nums;
      const result = num1 - num2;
      const message = `Resultado: ${num1} menos ${num2} = ${result}`;
      sectionResultado.textContent = message;
      addHistorico(message);
    });
    
    btnMultiplicar.addEventListener('click', function() {
      const nums = getNumbers();
      if (!nums) return;
      const { num1, num2 } = nums;
      const result = num1 * num2;
      const message = `Resultado: ${num1} vezes ${num2} = ${result}`;
      sectionResultado.textContent = message;
      addHistorico(message);
    });
    
    btnDividir.addEventListener('click', function() {
      const nums = getNumbers();
      if (!nums) return;
      const { num1, num2 } = nums;
      const result = num1 / num2;
      const message = `Resultado: ${num1} dividido por ${num2} = ${result}`;
      sectionResultado.textContent = message;
      addHistorico(message);
    });
  });
  