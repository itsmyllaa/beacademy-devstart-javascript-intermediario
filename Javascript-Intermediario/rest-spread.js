//Rest-Spread//
/*
        Rest/Spread
    Rest parametes: permite trabalhar com a quantidade indefinida de parâmetros em uma função ou elementos em um array.
    Em uma função, o rest permite capturar os argumentos:
    function getSum(...args) {
        let total = 0
        for(const args of args){
            total += arg
        }
        return total
    }

    Spread Operator: 
    Permite expandir uma expressão recebendo multiplos argumentos ou elementos. Podemos utilizar para concatenar/mergear arrays.

    const arr = [1,2,3]; 
    const arr2 = [...ar,4];
    const array1 = [1,2,3];
    const array2 = [4,5,6];
    const mergeArrays = [...array1,...array2];

    Destructuring:
    A desestruturação nos permite extrair dados de arrays e objetos e defini-los em novas variáveis.
    Desetructuring Objetos:
    const carro = {
        marca: 'Fiat',
        ano: 2018,
        portas: 4,
    }
    const {marca, ano} = carro
    Desestructuring Arrays:
    const frutas = ['Banana','Uva','Morango'];
    const [primeira, segunda, terceira] = frutas

*/
function getSum(...args) {
    let total = 0
    for(const args of args){
        total += arg
    }
    return total
}

console.log(getSum(2, 5))

//spread operator
const arr =  [1, 2, 3];
const arr2 = [...arr, 4];
console.log (arr2)
//merge arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergeArrays = [...array1, ...array2];
console.log(mergeArrays)
//end