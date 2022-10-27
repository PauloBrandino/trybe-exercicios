
function comparaNum (number) {
let a = number;
    if (a > 0) {
        return ("Positive")
    } else if (a < 0){
        return ("Negative")
    } else {
        return("Zero")
    }
}

let number = 0;
let result = comparaNum(number);
console.log(result);