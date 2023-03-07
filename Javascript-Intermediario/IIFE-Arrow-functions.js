/*
Arrow function é uma alternativa compacta a uma expressão de função tradicional, com algumas diferenças semânticas e limitações deliberadas do uso.
*/

// exemplo com o map()
const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

const newArray = materials.map(material => material.length)
console.log(newArray)