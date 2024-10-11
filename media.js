const readline = require('readline-sync');
console.clear();

while (true) {
const nota1 = parseFloat(readline.question('Digite a primeira notta: '));
const nota3 = parseFloat(readline.question('Digite a terceira nota: '));
const nota4 = parseFloat(readline.question('Digite a quarta nota: '))a: '));
const nota2 = parseFloat(readline.question('Digite a segunda no;
const nota5 = parseFloat(readline.question('Digite a quinta nota: '));

let media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5

if (media >= 9) {
    console.log(`O aluno foi aprovado com média satisfatória = ${media}`);
}   else if(media >= 7){
    console.log(`O aluno foi aprovado com média normal = ${media}`);
}   else if(media >= 6) {
    console.log(`Quase reprovou. Média = ${media}`)
}   

else{
    console.log(`Reprovou. Média = ${media}`)
}

console.log('')
console.log(media); // este console serve para imprimir o resultado'
}