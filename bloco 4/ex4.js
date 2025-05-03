// Retornar Metade:
// o Situação Problema: Calcular a metade de um valor.
// o Tarefa: Crie uma função metade(numero) que retorna a metade do número recebido (numero / 2).

numero = parseFloat(prompt("Insira o valor que deseja saber a metade: "))

function metade(numero) {
    divisao = numero / 2;
    return divisao;
};
alert("A metade é: " + metade(numero));