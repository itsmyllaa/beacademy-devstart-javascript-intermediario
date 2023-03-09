//Try/Catch//
/*
    Ao executar um código Javascript, diferentes erros podem ocorrer.
    Podem ser erros de codificação do programador, erros devido a requisição de dados e outras coisas imprevisives como queda de um servidor ou de uma rede em se tratando de promise.
    Estes erros podem ser tratados com as palavras a seguir:

    Try: Determina um bloco de código que será executado na promise;

    Catch: Determina um bloco de código no qual os erros serão tratados;

    Finally: Determina um bloco de código que será executado qualquer que seja o resultado da promise;

    Throw: Define um erro customizado.

//Niveis de try/catch//

    Utilizando o objeto Error

    O construtor Error() cria um objeto de erro.
    Podemos utilizar Error() ou new Error().

    A declaração throw lança uma exceção previamente definida. A execução da função será interrompida, e as instruções após o throw não serão executadas
    Também podemos customizar o erro instanciando uma classe a ser chamada toda vez que um erro acontece na aplicação.

//Try/catch aninhado//

    Não é boa prática!

    try{
        //do something 
    } catch()  {
        //exception
    } try {
        //do something in the same line but being less ambitious
    } catch()  {
        //exception
    } try {
        //do the minimun accepttable
    } catch()  {
        //more try catchs?
    }
*/

class customError {
    constructor(message) {
        this.messagem = message
    }
}

function function1() {
    console.log('function 1 executou')
    try {
        console.log('function 1 no try')
        codigoA
    } catch(error) {
        console.log('Erro na function 1')
        console.error('Erro na function 1', error)
        throw new customError('Erro na function 1')
    }
}
function1()