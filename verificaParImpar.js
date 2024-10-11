const readline = require('readline-sync');

let numero = parseInt(readline.question("Digite o número: "))


if(numero % 2 == parseInt){
    console.log('Par')
}   else{
    console.log('Impar')
}