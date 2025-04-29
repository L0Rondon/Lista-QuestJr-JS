// 5. Preço por Unidade:
// o Situação Problema: Você comprou um pacote com vários itens iguais e quer saber o preço de cada item individual.
// o Tarefa: Crie uma função precoUnitario(precoTotalPacote, numeroItens) que retorna o preço de um único item.

precoTotalPacote = parseFloat(prompt("Qual o valor total do pacote? "));
numeroItens = parseInt(prompt("Quantas unidades são? "));

function precoUnitario(precoTotalPacote, numeroItens){

    return precoTotalPacote/numeroItens;
}
alert ("O valor unitário do produto é R$"+ precoUnitario(precoTotalPacote, numeroItens));