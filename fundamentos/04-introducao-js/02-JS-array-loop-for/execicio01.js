let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Percorrendo todos os valore do Array com console.log.
    // for (indexNumbers =0; indexNumbers < numbers.length; indexNumbers += 1){
    //     console.log(numbers[indexNumbers]);
    // }

// Soma de todos os valores do array.
    let somaValores = 0;

    for (indexNumbers = 0; indexNumbers < numbers.length; indexNumbers += 1) {
        somaValores = somaValores + numbers[indexNumbers];
    }
console.log(somaValores);
    