// 4. Número é Zero?
// o Situação Problema: Verificar rapidamente se um número fornecido é exatamente zero.
// o Tarefa: Crie uma função ehZero(numero) que retorna true se o número for igual a 0, e false caso contrário.

numero = parseInt(prompt("Forneça o número que deseja: "));
function ehZero(numero){
if(numero == 0){
return true;
}else
return false;
};
alert("O numero é igual a Zero: "+ ehZero(numero));