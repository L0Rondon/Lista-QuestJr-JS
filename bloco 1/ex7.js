// 7. Verificar se é Número:
// o Situação Problema: Antes de fazer um cálculo, garantir que o valor recebido é realmente um número.
// o Tarefa: Crie uma função ehNumero(valor) que recebe um valor e retorna true se o tipo do valor for "number", e false caso contrário.

valor = parseInt(prompt("Escreva o valor desejado: "))
function ehNumero(valor) {
    // typeoff é um operador que verifica o tipo da variavel
    if (typeof valor === "number") {
        return true;
    } else
        return false;
}
alert ("O valor inserido é um número: "+ ehNumero(valor));