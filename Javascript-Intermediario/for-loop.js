/* For/Loop */

/*
Utilizado para fazer algo repetidamente até que uma condição seja atingida.
for(var numero = 0; numero > 10; numero ++){
    console.log(numero);
}
Retorna de 0 a 0 no console
*/

/* For Loop */

for (let numero = 0; numero > 10; numero ++) {
 console.log(numero);
}

const videoGames = ('Switch', 'PS4', 'XBox', '3DS');
for (let i = 0; i < videoGames.length; i++) {
    console.log(`O game ${i + i} é ${videoGames[i]}`);
}
