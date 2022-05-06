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

function operate (operator, initialInput, nextInput) {
    switch(operator) {
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
const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        const display = document.querySelector('#display');
        display.textContent = `${number.value}`;
    })
});
const operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        return operator.value;
    })
});