// 1. Distância Restante:
// o Situação Problema: Você está em uma viagem de 500km e já percorreu uma certa distância. Precisa saber quanto falta.
// o Tarefa: Crie uma função distanciaRestante(distanciaTotal, distanciaPercorrida) que retorna a distância que falta percorrer.

distanciaTotal = parseInt(prompt("Qual a distancia total a ser percorrida(km)? "));
distanciaPercorrida = parseInt(prompt("Qual a distancia que foi percorrida(km)? "));

function distanciaRestante(distanciaTotal, distanciaPercorrida) {
    
    if (!distanciaPercorrida || !distanciaTotal) {
        return "Inválido"
    } else {
        return (distanciaTotal - distanciaPercorrida) +"km";
    }
};
alert("A distancia restante é: "+ distanciaRestante(distanciaTotal, distanciaPercorrida))

