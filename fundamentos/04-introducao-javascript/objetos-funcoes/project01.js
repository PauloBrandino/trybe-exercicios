
function decode(nome) {
   
    let splitsWords = nome.split("");
    for (let index =0; index < splitsWords.length; index += 1){
        if (splitsWords[index] === 'a'){
            splitsWords[index] = 1;
        } else if (splitsWords[index] === 'e') {
            splitsWords[index] = 2;
        } else if (splitsWords[index] === "i") {
            splitsWords[index] = 3;
        } else if (splitsWords[index] === "o") {
            splitsWords[index] = 4;
        } else if (splitsWords[index] === "u") {
            splitsWords[index] = 5;
        }
    }
    return splitsWords.join('');  
    }

let nome = 'be trybe';
console.log(decode(nome));