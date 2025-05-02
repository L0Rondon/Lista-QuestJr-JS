// 10. Páginas Restantes:
// o Situação Problema: Você está lendo um livro e quer saber quantas páginas faltam para terminar.
// o Tarefa: Crie uma função paginasRestantes(totalPaginas, paginasLidas) que retorna o número de páginas que ainda faltam ler.

totalPaginas = parseInt(prompt("Qual a quantidade total de páginas? "));
paginasLidas = parseInt(prompt("Qual a quantidade de páginas lidas? "));

function paginasRestantes(totalPaginas, paginasLidas) {
    
    if (!paginasLidas || !totalPaginas) {
        return "Inválido"
    } else {
        return totalPaginas- paginasLidas;
    }
};
alert("Restam "+ paginasRestantes(totalPaginas, paginasLidas)+ " páginas para ler.")