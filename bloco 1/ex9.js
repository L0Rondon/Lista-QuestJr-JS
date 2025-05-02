// 9. Criar Email Simples:
// o Situação Problema: Gerar um endereço de email simples para um novo usuário, juntando o nome de usuário com o domínio "@exemplo.com".
// Tarefa: Crie uma função criarEmail(nomeUsuario) que recebe o nome de usuário (string) e retorna o email completo.

nomeUsuarioEspaco = prompt("Escreva o nome de usuário: ");
// método trim() remove os espaços em branco
nomeUsuario = nomeUsuarioEspaco.trim()

function criarEmail(nomeUsuario){

return nomeUsuario+"@gmail.com";
}
alert("Email gerado: "+ criarEmail(nomeUsuario));