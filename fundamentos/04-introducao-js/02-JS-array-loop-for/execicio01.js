let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

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
    let valorMaior = 0;
    for (indexNumbers = 0; indexNumbers < numbers.length; indexNumbers += 1){
        if (numbers[indexNumbers] > valorMaior) {
            valorMaior = numbers[indexNumbers];
        }
    }
    console.log(valorMaior);