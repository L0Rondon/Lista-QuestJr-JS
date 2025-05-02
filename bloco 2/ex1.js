// 1. Temperatura Agradável?
// o Situação Problema: Decidir se a temperatura está agradável (entre 20 e 25 graus Celsius, inclusive).
// o Tarefa: Crie uma função temperaturaAgradavel(temperatura) que retorna true se a temperatura estiver entre 20 e 25 (inclusive), e false caso contrário.

temperatura = parseInt(prompt("Qual a temperatura? "));
function temperaturaAgradavel(temperatura) {
    if (temperatura >= 20 && temperatura <= 25) {
        return true;
    } else
        return false;
};
alert ("A temperatura está agradável: " + temperaturaAgradavel(temperatura));