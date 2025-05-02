// 3. Desconto para Idosos:
// o Situação Problema: Um evento oferece entrada gratuita para pessoas com 65 anos ou mais.
// o Tarefa: Crie uma função temEntradaGratuita(idade) que retorna true se a idade for 65 ou mais, e false caso contrário.

idade = parseInt(prompt("Insira a sua idade: "));
function temEntradaGratuita(idade) {
    if (idade >= 65) {
        return true;
    } else
        return false;
};
alert("A entrada é gratuita: "+ temEntradaGratuita(idade));