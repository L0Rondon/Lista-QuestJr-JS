// 2. Gorjeta do Garçom:
// o Situação Problema: Calcular a gorjeta de 10% sobre o valor de uma refeição.
// o Tarefa: Crie uma função calcularGorjeta(valorRefeicao) que recebe o valor da refeição e retorna o valor da gorjeta (10% do valor).

valorRefeicao = parseFloat(prompt("Qual o valor total da refeição? "));
function calcularGorjeta(valorRefeicao) {

        return (valorRefeicao/100)*10;
};

alert("O valor da gorjeta é R$ "+ calcularGorjeta(valorRefeicao))