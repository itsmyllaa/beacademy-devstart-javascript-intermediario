//Callbacks//
/*
        Trata-se de uma função que será eecutada quando algum evento acontecer ou quando algum código chegar a um estado esperado.
        Isto quer dizer que esta função é assíncrona, pois não será executada imediatamente. Neste caso, a aplicação continuará funcionando enquanto a função espera o momento da execução.
        Exemplo:
        Uma função a ser executada após um dado ser salvo no banco de dados;
        Uma função que executa após os dados serem retornados de uma chamada à uma API;
        Uma função que sera executada após o click do usuário em um botão no site;

        Na maioria dos casos, uma função de callback é passada como argumento de outra função.

        function foo(p){
            return p
        }
        function foo2(callback){
            callback('p');
        }
        foo2();
 */

//Funções de callback//

function hello(name){
    console.log(name)
}

function helloUser(callback){
    callback('Marcelo')
}

//helloUser(hello)//

const callback = e => alert('Foi clicado')
window.addEventListener('click', callback)