const number = 5;
let symbol = "*";
let coluna = '';
let posicao = number;

for (index = 0; index <= number; index += 1){
    for (colunaIndex = 0; colunaIndex < number; colunaIndex +=1) {
        if (colunaIndex < posicao) {
            coluna = coluna + " ";
        } else {
            coluna = coluna + symbol
        }
    }
        console.log(coluna);
        coluna = '';
        posicao -+ 1;
}