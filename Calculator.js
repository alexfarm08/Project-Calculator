// VARIABLES
let currentInput = "";
let prevInput = "";
let operator = "";
let num1 = 0;
let num2 = 0;

function add(num1,num2) {
    let sum = num1 + num2;
    return sum;
}

function multiply(num1,num2) {
    let sum = num1 * num2;
    return sum;
}

function subtract(num1,num2) {
    let sum = num1 - num2;
    return sum;
}

function divide(num1,num2) {
    let sum = num1 / num2;
    return sum;
}

function modulo(num1,num2) {
    let remainder = num1 % num2;
    return remainder;
}

const display = document.querySelector(".screen-part");

function appendToDisplay(input) {
    if (input === '+' || input === '-' || input === 'x' || input === '/' || input === '%') {
        display.innerText += input;
        operator = input
        prevInput = currentInput;
        currentInput = ""
    }
    else {
        display.innerText += input;
        currentInput += input;
    }
}

function clearDisplay() {
    display.innerText = "";
    currentInput = "";
    prevInput = "";
    operator = "";
}

function calculate() {
    switch (operator) {
        case '+':
            num1 = parseFloat(prevInput);
            num2 = parseFloat(currentInput);
             clearDisplay()
             currentInput = add(num1,num2);
             display.innerText = currentInput;
            break;
        case '-':
            num1 = parseFloat(prevInput);
            num2 = parseFloat(currentInput);
            clearDisplay()
            currentInput = subtract(num1,num2);
            display.innerText = currentInput;
            break;
        case 'x':
            num1 = parseFloat(prevInput);
            num2 = parseFloat(currentInput);
            clearDisplay()
            currentInput = multiply(num1,num2);
            display.innerText = currentInput;
            break;
        case '/':
            num1 = parseFloat(prevInput);
            num2 = parseFloat(currentInput);
            clearDisplay()
            currentInput = divide(num1,num2);
            display.innerText = currentInput;
            break;
        case '%':
            num1 = parseFloat(prevInput);
            num2 = parseFloat(currentInput);
            clearDisplay()
            currentInput = modulo(num1,num2);
            display.innerText = currentInput;
            break;
    }
}