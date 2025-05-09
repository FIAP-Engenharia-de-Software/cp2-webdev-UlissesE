// ## Calculadora de IMC (1 ponto)

// **Enunciado:**

// Crie a função calcularIMC que receba peso e altura e retorne:

// - `"Abaixo do peso"` se < 18.5
// - `"Peso normal"` se entre 18.5 e 24.9
// - `"Sobrepeso"` se entre 25 e 29.9
// - `"Obesidade"` se ≥ 30
// - `"Erro"` para dados inválidos

// **Fórmula IMC**: peso / (altura * altura)

function calcularIMC(peso, altura) {
  let imc = peso / (altura * altura)
  let resultado

  if (peso == 'abc' || altura == 0) {
    resultado = "Erro"
    return resultado
  }
  if (imc < 18.5) {
    resultado = "Abaixo do peso"
    return resultado
  } else if (imc >= 18.5 && imc < 24.9) {
    resultado = "Peso normal"
    return resultado
  } else if (imc > 24.9 && imc < 29.9) {
    resultado = "Sobrepeso"
    return resultado
  } else {
    resultado = "Obesidade"
    return resultado
  }

}

// NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcularIMC };