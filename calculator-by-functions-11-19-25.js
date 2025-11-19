function sum(numA, numB) {
    return numA + numB;
}

function subtract(numA, numB) {
    return numA - numB;
}

function multiply(numA, numB) {
    return numA * numB;
}

function divide(numA, numB) {
    if (numB == 0) {
        return "undefined";
    }
    
    return numA / numB;
}

let numA = parseFloat(prompt("Type your first value: ")), 
    numB = parseFloat(prompt("Type your second value: ")),
    loopBreak = 1,
    option = 0;

while (loopBreak == 1) {

    option = Number(prompt("Choose an option: 1. Sum 2. Subtract 3. Multiply 4. Divide"));

    if (option >= 1 && option <= 4) {
        loopBreak = 0;
    }

    else {
        console.log("Choose a valid option, from 1 to 4");
    }
}

if (option == 1) {
    console.log("your sum is " + sum(numA, numB));
}

if (option == 2) {
    console.log("your subtraction is " + subtract(numA, numB));
}

if (option == 3) {
    console.log("your multiplication is " + multiply(numA, numB));
}

if (option == 4) {
    console.log("your division is " + divide(numA, numB));
}