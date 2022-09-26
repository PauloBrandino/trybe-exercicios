// Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let primoNumber = 0;

    for (index = 2; index <= 50; index += 1) {
        if (index%index === 0) {
            if (index > primoNumber) {
                primoNumber = index;
            }
        }
    }
console.log(primoNumber);