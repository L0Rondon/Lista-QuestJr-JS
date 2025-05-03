// 3. Converter Reais para Dólares (Taxa Fixa):
// o Situação Problema: Estimar um valor em dólares, usando uma taxa de câmbio fixa (ex: 1 dólar = 5 reais).
// o Tarefa: Crie uma função reaisParaDolares(valorReais) que recebe um valor em reais e retorna o valor aproximado em dólares (valorReais / 5).

valorReais = parseFloat(prompt("Insira o valor em reais que deseja converter: "))

function reaisParaDolares(valorReais) {
    dolares = (valorReais / 5);
    return dolares;
};
alert("O valor em dolar é igual a: "+ reaisParaDolares(valorReais));