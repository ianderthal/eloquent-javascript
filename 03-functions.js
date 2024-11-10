
//Define the function min that takes two arguments and returns their minimum
function min(a, b) {
    if (a < b) return a;
    else return b;
}
  
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

//Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.
function isEven(n) {
    if (n === 0) return true;
    else if (n === 1) return false;
    else if (n < 1) return isEven(-n);
    //recursive step
    else return isEven(n-2);
}

//Write a function called countBs that takes a string as its only argument and returns a number that indicates how many uppercase B characters there are in the string.
function countBs(string) {
    let bCount = 0;
    //loop through string looking for capital B, incrementing bCount
    for (let char of string) {
        if (char === "B") {
            bCount++;
        }
    }
    return bCount;
}

//Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase B characters). Rewrite countBs to make use of this new function.

function countChar(string, char) {
    let charCount = 0;
    for (let currentChar of string) {
        if (currentChar === char) {
            charCount++;
        }
    }
    return charCount;
}

function countBs(string) {
    return countChar(string, "B")
}


