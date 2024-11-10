//Looping a Triangle

for(let line = "#"; line.length < 8; line += "#") {
    console.log(line);
}

//FizzBuzz
for (let i = 1; i <= 100; i++){
    let output = "";
    if(n % 3 == 0) output += "Fizz";
    if(n % 5 == 0) output += "Buzz";
    //if output is non-empty (meaning i was divisble by 3,5, or both) it prints output. if output is still an empty string, it prints the value of i instead.
    console.log(output || i);
}

//Chessboard
function generateBoard(size) {
    let board = "";
    for(let y = 0; y < size; y++) {
        for(let x = 0; x < size; x++ ) {
            if ((x + y) % 2 === 0) {
                board += " ";
            } else {
                board += "#";
            }
        }
        //add a newline character
        board += "\n";
    }
    //output board
    console.log(board);
}

console.log(generateBoard(8));
