//We need initial input
//In order to grab initial input, we need to check if buttons are pressed
//if a button is pressed, it needs to be part of the initialinput value
//how do you check if a button is pressed?
//how do you check WHICH button is pressed?
let initialInput = '';
let nextInput = '';
let currentInput = '';

const display = document.querySelector('#display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

//when operator is clicked, pass number to oldnum and save operator
function moveNum () {
    initialInput = currentInput;
    currentInput = '';
};

$("numbers").click(function () {
    currentInput += $(this).val();
    display.textContent = `${currentInput}`;
})

//operations
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
