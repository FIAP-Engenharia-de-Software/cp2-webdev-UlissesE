// ### Calculadora Simples (2 pontos)

// **Enunciado:**

// Crie uma função chamada Calcular, que recebe dois números e uma operação matemática (`+`, `-`, `*`, `/`). A função deve:

// - Retornar `"Erro: parâmetros inválidos"` se `a` ou `b` não forem números.
// - Retornar `"Erro: divisão por zero"` se tentar dividir por zero;
// - Retornar `"Erro: operação inválida"` se for passado um operador desconhecido;
// - Executar a operação correta e retornar o resultado;

function calcular(num1, num2, operador) {
  let mensagemErro

  if ((num1 + 1) == !Number || (num2 + 1) == !Number) {
    mensagemErro = "Erro: parâmetros inválidos"
    return mensagemErro
  }
  if (String(operador) == "/" && (num1 == 0 || num2 == 0)) {
    mensagemErro = "Erro: divisão por zero"
    return mensagemErro
  }
  if (operador != "+" && operador != "-" && operador != "*" && operador != "/") {
    mensagemErro = "Erro: operação inválida"
    return mensagemErro
  }

  if (operador == "+") {
    return num1 + num2
  } else if (operador == "-") {
    return num1 - num2
  } else if (operador == "*") {
    return num1 * num2
  } else {
    return num1 / num2
  }


}


//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcular };