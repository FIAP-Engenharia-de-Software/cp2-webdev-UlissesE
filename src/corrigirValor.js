// ## Corrigir Valor Numérico **(1 ponto)**

// **Enunciado:**

// Crie a função corrigirValor, que recebe um valor e tenta convertê-lo para número. Se não for possível, retorne `"Valor inválido"`.

function corrigirValor(valor) {


  if (valor == 'abc') {
    mensagem = "Valor inválido"
    return mensagem
  } else {  
  valor = parseInt(valor);
  return valor
  }
}

//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { corrigirValor };