// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Percorrendo todos os valore do Array com console.log.
    // for (indexNumbers =0; indexNumbers < numbers.length; indexNumbers += 1){
    //     console.log(numbers[indexNumbers]);
    // }

// Soma de todos os valores do array.
    // let somaValores = 0;

    // for (indexNumbers = 0; indexNumbers < numbers.length; indexNumbers += 1) {
    //     somaValores = somaValores + numbers[indexNumbers];
    // }
    // console.log(somaValores);

// Calculando a média dos valores.
    // let mediaNumbers = 0;
    // mediaNumbers = somaValores / numbers.length;
    //console.log(mediaNumbers);

// Utilizando IF pra comparações.

    // if (mediaNumbers > 20) {
    //     console.log("Valor maior que 20!");
    // } else {
    //     console.log("Valor menor que 20!");
    // }

// Imprimindo maior valor do Array
    // let valorMaior = 0;
    // for (indexNumbers = 0; indexNumbers < numbers.length; indexNumbers += 1){
    //     if (numbers[indexNumbers] > valorMaior) {
    //         valorMaior = numbers[indexNumbers];
    //     }
    // }
    // console.log(valorMaior);

// Quantidade de números ímpares.
    // let valoresImpares = 0;  
    // for (indexNumbers = 0; indexNumbers < numbers.length; indexNumbers += 1){
    //     if (numbers[indexNumbers]%2 > 0) {
    //         valoresImpares += 1
    //     }       
    // }
    
    // if (valoresImpares > 0) {
    //     console.log(valoresImpares, "valores ímpares!");
    // } else {
    //     console.log("Nenhum número ímpar encontrado!")
    // }
          

//Menor valor da array.
    // let menorValor = Infinity;
    // for (indexNumbers = 0; indexNumbers < numbers.length; indexNumbers += 1) {
    //     if (numbers[indexNumbers] < menorValor) {
    //         menorValor = numbers[indexNumbers]
    //     }
    // }
    // console.log(menorValor);
    
//Crianco uma array com for.

    let numbers = [];
    for (index = 1; index <= 25; index += 1) {
        numbers.push(index);
    }
    console.log(numbers);

    let divi2 = [];
    for (indexDivi = 0; indexDivi < numbers.length; indexDivi += 1){
        divi2.push(indexDivi/2)
    }
    console.log(divi2);

        
    
