const readline = require('readline-sync');

const idade = parseInt(readline.question('Digite a IDADE: '));



    let numfinal = (2024 - idade)

if (numfinal > 1923 && numfinal < 1946) {
    console.log('Você nasceu em ' + numfinal + ' e tem ' + idade + ' então é geração silenciosa')
}   else if(numfinal > 1947 && numfinal < 1963){
    console.log('Você nasceu em ' + numfinal + ' e tem ' + idade + ' então é baby boomers')
}   else if(numfinal > 1984 && numfinal < 1995){
    console.log('Você nasceu em ' + numfinal + ' e tem ' + idade + ' então é millenials')
}   else if(numfinal > 1995 && numfinal < 2009){
    console.log('Você nasceu em ' + numfinal + ' e tem ' + idade + ' então é geração z')
}   else if(numfinal > 2010){
    console.log('Você nasceu em ' + numfinal + ' e tem ' + idade + ' então é geração alpha')
}