// Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggerWord = '';
let smallerWord = '';

    for (let index = 0; index < array.length; index += 1) {
        if (array[index].length > biggerWord.length) {
            biggerWord = array [index];
        } else {
            smallerWord =array[index];
        }
    }
    console.log(biggerWord, "é a maior palavra!");
    console.log(smallerWord, "é a menor palavra!")
