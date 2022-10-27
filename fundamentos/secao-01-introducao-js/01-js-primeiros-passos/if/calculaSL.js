const salarioBruto = 2000;
let descInss;
let descIR;


if (salarioBruto <= 1556,94) {
    descInss = salarioBruto * 0.08;
} else if (salarioBruto <= 2.594,92) {
    descInss = salarioBruto * 0.09;
} else if (salarioBruto <= 5.189,82) {
    descInss = salarioBruto * 0.11;
} else if (salarioBruto > 5.189,82) {
    descInss = 570,88;
} 

const salarioBase = salarioBruto - descInss;
console.log(salarioBase);