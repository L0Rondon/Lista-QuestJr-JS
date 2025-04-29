// 6. Minutos para Segundos:
// o Situação Problema: Converter um tempo dado em minutos para segundos.
// o Tarefa: Crie uma função minutosParaSegundos(minutos) que recebe um valor em minutos e retorna o equivalente em segundos (minutos * 60).

minutos = parseInt(prompt("Qual o valor em minutos? "));

function minutosParaSegundos(minutos) {

        return (minutos*60);
};

alert("O valor convertido para segundos é "+ minutosParaSegundos(minutos)+"s")