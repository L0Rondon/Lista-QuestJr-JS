// 4. Idade em Dias:
// o Situação Problema: Estimar quantos dias de vida uma pessoa tem, aproximadamente, com base na idade em anos (ignore anos bissextos).
// o Tarefa: Crie uma função idadeEmDias(idadeAnos) que recebe a idade em anos e retorna a idade aproximada em dias (idade * 365).

idadeAnos = parseInt(prompt("Qual a idade em anos? "));
function idadeEmDias(idadeAnos) {

        return (idadeAnos*365);
};

alert("A idade em Dias é igual a "+ idadeEmDias(idadeAnos))