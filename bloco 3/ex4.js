// 4. Imprimir Ímpares até 9:
// o Situação Problema: Listar todos os números ímpares menores que 10.
// o Tarefa: Crie uma função listarImparesAte9() que imprime no console os números ímpares de 1 até 9.

function listarImparesAte9() {
    for (let i = 1; i < 10; i++) {
        // i % 2 retorna o resto da divisão por 2.
        if (i % 2 !== 0) {
            // se o resto do número for diferente a zero 
            console.log("Lista número impáres: "+ i)
        }
    }
};
listarImparesAte9();