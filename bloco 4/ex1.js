// 1. Mensagem de Despedida:
// o Situação Problema: Enviar uma mensagem padrão de despedida.
// o Tarefa: Crie uma função despedida(nome) que recebe um nome e retorna a string "Até logo, [nome]!".

nome = prompt("Escreva o nome: ")

function despedida(nome){
    return "Até logo, "+nome+"! 👋";
};
alert (despedida(nome));