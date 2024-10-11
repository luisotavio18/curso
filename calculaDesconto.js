const readline = require('readline-sync');

let valor = parseInt(readline.question('Digite o valor: '))

let desconto = parseInt(readline.question('Digite 1 para PIX\nDigite 2 para pagamento\nDigite 3 para pagamento no credito\n'))

if (desconto >= 1 && desconto <= 3){

    
    if (desconto == 1){
        let valorPagar = (valor * 0.9)
        console.log('Valor total deu ' + valorPagar + ' com o desconto do PIX')
    }   else if (desconto == 2){
        let valorPagar = (valor * 0.95)
        console.log('Valor total deu ' + valorPagar + ' com o desconto do DÉBITO')
    }   else if(desconto == 3){
        let valorPagar = (valor * 0.97)
        console.log('Valor total deu ' + valorPagar + ' com o desconto do CRÉDITO') 
    }

}   else{
    console.log('Opção inválida')
}