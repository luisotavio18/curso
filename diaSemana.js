const readline = require('readline-sync');

const numero = parseInt(readline.question("Digite um número de 1 a 7: "))

switch (numero) {
    case 1:
        console.log('Segunda');
        break;
    case 2:
        console.log('terca');
        break;
    case 3:
        console.log('quarta');
        break;
    case 4:
        console.log('quinta');
        break;
    case 5:
        console.log('sexta');
        break;
    case 6:
        console.log('sabado');
        break;
    case 7:
        console.log('domingo');
        break;

}