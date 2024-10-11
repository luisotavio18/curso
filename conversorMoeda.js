const readline = require("readline-sync");

const dolar = parseFloat(5.49);
const euro = parseFloat(6.16);

const valor = parseFloat(readline.question('Digite o número: '))
const escolha = parseInt(readline.question('\n1 - Dólar\n2- Euro\n3-Ambos\n'))

if(escolha >= 1 && escolha < 4){
    switch(escolha){
        case 1:
            let resDolar = (valor * dolar)
            console.log("Dólar: R$ " + resDolar)
            break;
        case 2:
            let resEuro = (valor * euro)
            console.log("Euros: R$ " + resEuro)
            break;
        case 3:
            let resAmbasPrimeiro = (valor * dolar)
            let resAmbasSegundo = (valor * euro)
            console.log("Dolar: R$ " + resAmbasPrimeiro + "\nEuro: R$ " + resAmbasSegundo)
    }
}   else{
    console.log("Escolha entre Dólar, Euros ou ambos")
}
