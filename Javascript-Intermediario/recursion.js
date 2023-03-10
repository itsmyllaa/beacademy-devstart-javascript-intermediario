//Recursion
/*
        Recursion:
        É o ato de uma função chamar a si mesma. A recursão é bastante usada para resolver problemas que contém subproblemas menores, dividir um problema complexo em problemas menores, fazer uma contagem regressiva ou uma contagem até que certo valor seja atingido.
        Este tipo de função precisa de uma condição para que ela pare de chamar a si mesma.
        Ou caso contrário entrará em um 'looping' infinito.
        Porém, a técnica de recursão não é uma boa prática, pois deixa o código complexo de se entender ou muito verboso e de difícil manutenção. É sempre preferivel alternativas mais modernas comopor exemplo, o uso de laços de repetição.

        Default Parameters:
        Ao definir parâmetros padrões para uma função, podemos definir valores caso nenhum valor for passado ou este for indefinido.
*/
//===========================

function recurse(){
    if(condition) {
        recurse();
    } else {
        //stoping called recurse()
    }
}

//============================

function say(message='Hi') {
    console.log(message);
}
say();
say('Hello')

//============================

function countDown(number) {
    console.log(number);
    const newNumber = number - 1;

    if (newNumber > 0) {
        countDown(newNumber);
    }
}

countDown(10);

//===========================

import {somarNumeros} from './escopo.js'
//let x = 10
const result = somarNumeros()

console.log(result)