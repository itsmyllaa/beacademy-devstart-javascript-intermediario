//Async-Await//
//Promises//
/*
        Async e Await são palavras-chave do Javascript. 
        Foram implementadas a partir do ES2017.
        Trazem uma sintaxe que simplifica a manipulação da programação assíncrona no Javascript, facilitando o fluxo de escrita e leitura do código.
        Com elas, se tornou possível escrever código assíncrono e lido e estruturado de forma síncrona.
        
        Podemos definir uma função como async e usar await antes de qualquer expressão que retorne uma promise. 
        Assim, a função definida como async irá esperar até que promise seja resolvida.

        A palavra-chave async indica que a função tem comportamento assíncrono e que se deve esperar sua resolução antes do programa continuar.
        O await indica a promise que devemos esperar.
*/
import { error } from 'console';
import fetch from 'node-fetch';

const firstUser = async (userId) => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`)
    let resultJSON = await response.json()
    let title = resultJSON.title
    console.log(title)
}
firstUser(1)

//try/catch//
async function user(){
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
        let data = await response.json()
        console.log(data)
    } catch {
        console.log('erro ------> ', error)
        throw new Error('Erro na fetch')
    } finally {
        console.log('Acabou')
    }
}

user()