// 3. Conversor de Polegadas para Centímetros:
// o Situação Problema: Você tem uma medida em polegadas e precisa convertê-la para centímetros (1 polegada = 2.54 cm).
// o Tarefa: Crie uma função polegadasParaCm(polegadas) que recebe um valor em polegadas e retorna o valor correspondente em centímetros.

polegadas = parseFloat(prompt("Qual o valor em polegadas? "));
function polegadasParaCm(polegadas) {

        return (polegadas*2.54);
};

alert("O valor convertido para centimetros é "+ polegadasParaCm(polegadas)+"cm")