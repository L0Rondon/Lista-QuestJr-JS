// 2. Perímetro do Quadrado:
// o Situação Problema: Calcular o perímetro de uma sala quadrada.
// o Tarefa: Crie uma função perimetroQuadrado(lado) que recebe o tamanho do lado e retorna o perímetro (4 * lado).

lado = parseFloat(prompt("Escreva o valor do lado do quadrado: "))

function perimetroQuadrado(lado){
    perimetro = (4 * lado);
    return perimetro;
};
alert("O perimrtro do quadrado é igual a: "+perimetroQuadrado(lado));