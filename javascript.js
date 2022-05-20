//We need initial input
//In order to grab initial input, we need to check if buttons are pressed
//if a button is pressed, it needs to be part of the initialinput value
//how do you check if a button is pressed?
//how do you check WHICH button is pressed?
let initialInput = '';
let currentInput = '';
let calcOperator = '';

const display = document.querySelector('#display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');

//when operator is clicked, pass number to oldnum and save operator
numbers.forEach(number => number.addEventListener('click', numberClicked));

function numberClicked () {
    currentInput += this.value;
    display.textContent = `${currentInput}`;
};

operators.forEach(operator => operator.addEventListener('click', moveNum));
function moveNum () {
    initialInput = currentInput;
    currentInput = '';
    calcOperator = this.value;
};

equals.addEventListener('click', operate);

clear.addEventListener('click', function() {
    initialInput = '';
    currentInput = '';
    calcOperator = '';
    display.textContent = `${currentInput}`;
})

//operations

function operate () {
    switch(calcOperator) {
        case "add" :
            initialInput = parseInt(initialInput);
            currentInput = parseInt(currentInput);
            currentInput = initialInput + currentInput;
            break;
        case "subtract" :
            initialInput = parseInt(initialInput);
            currentInput = parseInt(currentInput);
            currentInput = initialInput - currentInput;
            break;
        case "multiply" :
            initialInput = parseInt(initialInput);
            currentInput = parseInt(currentInput);
            currentInput = initialInput * currentInput;
            break;
        case "divide" :
            initialInput = parseInt(initialInput);
            currentInput = parseInt(currentInput);
            currentInput = initialInput / currentInput;
            break;
    }
    display.textContent = `${currentInput}`;
};
