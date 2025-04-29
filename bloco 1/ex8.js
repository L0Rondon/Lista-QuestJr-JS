// Porta Aberta ou Fechada?
// o Situação Problema: Representar o estado de uma porta (aberta ou fechada).
// o Tarefa: Declare uma variável portaAberta com o valor booleano false. Crie uma função verificarPorta() que retorna o valor desta variável.
let portaAberta = false;
function verificarPorta() {
    if(portaAberta){
        return "Aberta"
    }else
    return "Fechada"
}

alert ("A porta está: "+ verificarPorta());
