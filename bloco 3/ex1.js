// 1. Andares do Elevador:
// o Situação Problema: Simular um elevador subindo do 1º ao 5º andar, anunciando cada andar.
// o Tarefa: Crie uma função simularElevador() que imprime no console "Subindo para o andar 1", "Subindo para o andar 2", ..., "Subindo para o andar 5".

function simularElevador() {
    for (let andar = 1; andar < 6; andar++) {
// console.log serve para escrever uma mensagem no console
        console.log("Subindo para o " + andar + "° andar");
    };
};

simularElevador();
