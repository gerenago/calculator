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
    displayInput();
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
    displayInput();
})

//operations
function integer () {
    initialInput = parseInt(initialInput);
    currentInput = parseInt(currentInput);
};

function displayInput () {
    display.textContent = `${currentInput}`;
}

function roundResult () {
    currentInput = Math.round((currentInput + Number.EPSILON) * 10000) / 10000;
}

function operate () {
    switch(calcOperator) {
        case "add" :
            integer()
            currentInput = initialInput + currentInput;
            roundResult()
            displayInput()
            break;
        case "subtract" :
            integer()
            currentInput = initialInput - currentInput;
            roundResult ()
            displayInput()
            break;
        case "multiply" :
            integer()
            currentInput = initialInput * currentInput;
            roundResult()
            displayInput()
            break;
        case "divide" :
            if (currentInput == "0") {
                display.textContent = `invalid`;
            } else {   
                integer()
                currentInput = initialInput / currentInput;
                roundResult()
                displayInput()
            }
            break;
    }
    
};
