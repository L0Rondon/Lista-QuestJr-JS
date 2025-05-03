// 5. Gerar Asteriscos:
// o Situação Problema: Desenhar uma linha simples usando um número específico de asteriscos.
// o Tarefa: Crie uma função linhaDeAsteriscos(quantidade) que recebe um número e retorna uma string contendo essa quantidade de asteriscos (ex: quantidade = 3 retorna ***). Use um loop for.

quantidade = parseInt(prompt("Escreva o número de asteriscos que deseja: "))

function linhaDeAsteriscos(quantidade) {
    let linha = "";

    for (let i = 1; i <= quantidade; i++) {
        // adiciona um * a variavel 
        linha += "*";
    }
    return linha;
};
console.log(linhaDeAsteriscos(quantidade));
alert(linhaDeAsteriscos(quantidade));