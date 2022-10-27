let pieces = "Pawn";
let result = pieces.toLowerCase();

switch (result) {
    case "king":
        console.log("Moves one squere in all directions");
    break;
    case "queen":
        console.log("Moves in all directions")
    break;
    case "bishop":
        console.log("Moves in all diagonals")
    break;
    case "knigth":
        console.log("Moves in L")
    break;
    case "tower":
        console.log("The Rook moves in a straight line in the columns and rows of the Board.")
    break;
    case "pawn":
        console.log("Moves one squere forward.")
    break;
}


