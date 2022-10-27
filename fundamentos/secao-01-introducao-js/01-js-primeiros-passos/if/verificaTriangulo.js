const a = 100;
const b = 50;
const c = -30;

if (a < 0 || b < 0 || c <0) {
    console.log("Erro! Valor de um ângulo inválido.")
} else if (a+b+c == 180) {
    console.log("True! É um triangulo!")
} else {
    console.log("Erro! Não é um triangulo")
}