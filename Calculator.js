// CALCULATOR VARIABLES 
let num1 = 0;
let num2 = 0;
let operator;

// MAKE FUNCTIONS FOR MATH OPERATIONS
function add(num1, num2) {
    let value = num1 + num2;
    return value;
}

function subtract(num1, num2) {
    let value = num1 - num2;
    return value;
}

function multiply(num1, num2) {
    let value = num1 * num2;
    return value;
}

function divide(num1, num2) {
    let value = num1 / num2;
    return value;
}

// TEST FUNCTIONS IN CONSOLE

// ADD
console.log(add(2,5));
console.log(add(5,5));
console.log(add(20,5));
console.log(add(25,50));
console.log(add(200,5000));;

// SUBTRACT
console.log(subtract(12,5));
console.log(subtract(50,5));
console.log(subtract(20,5));
console.log(subtract(250,50));
console.log(subtract(20000,5000));;

// MULTIPLY
console.log(multiply(2,5));
console.log(multiply(5,5));
console.log(multiply(20,5));
console.log(multiply(25,50));
console.log(multiply(200,5000));

// DIVIDE
console.log(divide(236,5));
console.log(divide(5,5));
console.log(divide(20,3));
console.log(divide(50,25));
console.log(divide(200,5));

// OPERATE FUNCTION 
function operate(num1, num2, operator) {
    // FIX ME: NEED TO ADD OUT PUT TO CALC SCREEN AFTER BUILDING CALC WITH HTML/CSS
    if (operator == '+') {
        add(num1,num2);
    }
    else if (operator == '-') {
        subtract(num1,num2);
    }
    else if (operator == '*') {
        multiply(num1,num2);
    }
    else if (operator == '/') {
        divide(num1,num2);
    }
}