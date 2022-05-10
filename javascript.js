//We need initial input
//In order to grab initial input, we need to check if buttons are pressed
//if a button is pressed, it needs to be part of the initialinput value
//how do you check if a button is pressed?
//how do you check WHICH button is pressed?
let initialInput = '';
let nextInput = '';

const zero = document.querySelector('.zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const adding = document.querySelector('.add');
const subtracting = document.querySelector('.subtract');
const multiplying = document.querySelector('.multiply');
const dividing = document.querySelector('.divide');
const display = document.querySelector('#display');

zero.onclick = function onZero() {
    initialInput += '0'
    display.textContent = `${initialInput}`;
    
}

one.onclick = function onOne() {
        initialInput += '1'
        display.textContent = `${initialInput}`;
        
}

two.onclick = function onTwo() {
        initialInput += '2'
        display.textContent = `${initialInput}`;
        
}

three.onclick = function onThree() {
        initialInput += '3'
        display.textContent = `${initialInput}`;
        
}

four.onclick = function onFour() {
        initialInput += '4'
        display.textContent = `${initialInput}`;
        
}

five.onclick = function onFive() {
        initialInput += '5'
        display.textContent = `${initialInput}`;
        
}

six.onclick = function onSix() {
        initialInput += '6'
        display.textContent = `${initialInput}`;
        
}

seven.onclick = function onSeven() {
        initialInput += '7'
        display.textContent = `${initialInput}`;
        
}

eight.onclick = function onEight() {
        initialInput += '8'
        display.textContent = `${initialInput}`;
}

nine.onclick = function onNine() {
        initialInput += '9'
        display.textContent = `${initialInput}`;
}




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
