
let displayValue = '';
let initialInput = '';
let nextInput = '';
let calcOperator = '';
let displaySolution = '';

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const display = document.querySelector('#display');


operators.forEach((operator) => {
    operator.addEventListener('click', getOperator)
});


numbers.forEach((number) => {
    number.addEventListener('click', displayNumbers)
});

function getOperator (operator) {
    calcOperator = operator.value;
    return calcOperator;
}

function displayNumbers () {
    if (calcOperator = '') {
        initialInput += `${number.value}`;
        display.textContent = `${initialInput}`;
        } else {
            nextInput += `${number.value}`;
            display.textContent = `${nextInput}`;
        }
}

function add (initialInput, nextInput) {
    return initialInput + nextInput;
};

function subtract (initialInput, nextInput) {
    return initialInput - nextInput;
};

function multiply (initialInput, nextInput) {
    return initialInput * nextInput;
};

function divide (initialInput, nextInput) {
    return initialInput / nextInput;
};
function operate (calcOperator, initialInput, nextInput) {
    switch(calcOperator) {
        case 'add' :
            return add(initialInput, nextInput)
        case 'substract' :
            return subtract(initialInput, nextInput)
        case 'multiply' :
            return multiply(initialInput, nextInput)
        case 'divide' :
            return divide(initialInput, nextInput)
    }
};