// 5. Dia de Semana ou Fim de Semana?
// o Situação Problema: Identificar se um dia da semana (representado por uma string como "segunda", "terça", ..., "domingo") é dia útil ou fim de semana.
// o Tarefa: Crie uma função tipoDeDia(diaSemana) que recebe a string do dia. Retorna "Fim de semana" se for "sábado" ou "domingo", e "Dia útil" para os outros dias.

diaSemanaEntrada = prompt("Insira o dia da semana desejado: ");
//O método toLowerCase() retorna a string com todos os caracteres em minúsculo
diaSemana = diaSemanaEntrada.toLowerCase();
function tipoDeDia(diaSemana) {
    if (diaSemana == "sabado" || diaSemana == "sábado" ||diaSemana == "domingo") {
        return "Fim de Semana";
    } else
        return "Dia útil";
};
alert("O dia inserido é "+ tipoDeDia(diaSemana));