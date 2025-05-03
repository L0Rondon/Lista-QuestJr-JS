// 3. Somar Números Pares até N:
// o Situação Problema: Calcular a soma apenas dos números pares de 2 até um número N.
// o Tarefa: Crie uma função somarParesAteN(n) que recebe um número n e retorna a soma de todos os números pares de 2 até n (inclusive, se n for par).

n = parseInt(prompt("Insira até qual número deseja somar: "))

function somarParesAteN(n) {
    let soma = 0;
    for (let i = 0; i <= n; i++) {
        // i % 2 retorna o resto da divisão por 2.
        if (i % 2 === 0 ) { 
            // se o resto do número for igual a zero 
            //soma o numero ao valor final
            soma += i;
        }
    }
    return soma;
};
alert ("A soma dos números pares é igual a: "+ somarParesAteN(n));