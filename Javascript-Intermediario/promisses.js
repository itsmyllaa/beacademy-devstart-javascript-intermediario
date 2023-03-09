//Promises//
/*
        O JavaScript permite ter comportamentos síncronos e assíncrono.

        Síncrono: Espera a tarefa acabar para continuar com a próxima.

        Assíncrono: Parte para a próxima tarefa antes da anterior terminar. A tarefa será executada e quando terminada será colocada em fila.

        Com o comportamento assíncrono, é possível carregar um site ou executar uma aplicação enquanto alguma tarefa ainda não terminou. Esta continua sendo executada 'por baixo dos panos', enquanto que as outras não ficam travadas esperando ela terminar.

        A funções no JavaScript são executadas na sequência em que são chamadas. Não na sequência em que são definidas.

        function myFirst(){
            myDisplayer("Hello")
        }
        function mySecond(){
            myDisplayer("Goodbye")
        }
        mySecond();
        myFirst();

        O objeto Promise apresenta a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante.
        Estados de uma promise:
        Pending: Estado inicial ou pendente.
        Fulfilled ou resolved: Operação concluida com sucesso. 
        Rejected: Operação falhou.

        Promise é uma função construtora, e por isso, é um objeto que permite modelar o comportamento assíncrono do javascript. Ela instancia 'promessas', ou seja, tarefas que podem levar um tempo maior para terminar em relação as outras.

        Isto acontece em alguns casos como por exemplo:
        - Temos que receber dados de alguma API;
        - Uma API precisa receber dados de outra API;
        - Uma API faz uma requisição a um banco de dados;

        Enquanto não temos respostas para estas requisições, nosso software não precisa ter seu funcionamento travado. Nestes casos temos uma promessa de que os dados requisitados chegarão.

        Then()
        As promises têm um método chamado .then() Ele permite que se realize alguma tarefa após a promise ser resolvida, será invocado quando a função for resolvida.
        Reject()
        Caso a promise não seja resolvida por algum motivo, será invocado o método reject.
        Finally()
        Será invocado independente do resultado da promise.
        Fetch()
        É um método que retorna uma promise.
        Exemplo:
        function getUser(userId){
            const user = fetch(url da api)
            .then(response => response.json())
            .then(data => console.log(data))
        }
        Promise.all()
        Utilizado quando há várias promessas que devem ser resolvidas
        const endpoints = [
            "https://api.com/api/user/1"
            "https://api.com/api/user/2"
            "https://api.com/api/user/3"
            "https://api.com/api/user/4"
        ]
        const promises = endpoints.map(url => fetch(url).then(res => res.json()))
        Promises.all(promises)
        .then(body => console.log(body.name))
 */
//Promises//

setTimeout(() => {
    console.log('resposta')
}, timeout), 5000;

function show(){
    setTimeout(() => {
        console.log('Oi')
    }, 2000);
    console.log('Até logo!')
}
show()

const minhaPromise = new Promise((resolve, reject) => {
    let n = 9
    if(n > 10) {
        resolve()
    } else {
        reject()
    }
})
minhaPromise
.then(result => console.log('resolveu'))
.catch(err => console.log('Erro'))
.finally(() => console.log('Finally'))

// ------ Exemplo ------- //

function showHello() {
    console.log("Hello")
}