// Aprovado ou Reprovado?
// o Situação Problema: Verificar se um aluno foi aprovado, considerando que a média para aprovação é 7.
// o Tarefa: Crie uma função checarAprovacao(nota) que recebe a nota e retorna "Aprovado" se a nota for 7 ou maior, ou "Reprovado" caso contrário.
nota = parseFloat(prompt("Insira a nota do aluno: "));

function checarAprovacao(nota) {
    if (nota >= 7) {
        return "Aprovado";
    } else
        return "Reprovado";
}
alert("O aluno foi: "+ checarAprovacao(nota));