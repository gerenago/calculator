//everything is a function!

function start () {
    let displayValue = '';
    let initialInput = '';
    let nextInput = '';
    let calcoperator = '';
    let displaySolution = '';

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

    function operate (calcoperator, initialInput, nextInput) {
        switch(calcoperator) {
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
    //listen for each number being pressed
    const numbers = document.querySelectorAll('.number');
    numbers.forEach((number) => {
        number.addEventListener('click', () => {
            //when clicked, add value to initalInput string
            if (calcoperator = '') {
            initialInput += `${number.value}`;
            const display = document.querySelector('#display');
            display.textContent = `${initialInput}`;
            } else {
                nextInput += `${number.value}`;
                const display = document.querySelector('#display');
                display.textContent = `${nextInput}`;
            }
        })
    });
    //listen for operator being pressed
    const operators = document.querySelectorAll('.operator');
    operators.forEach((operator) => {
        operator.addEventListener('click', () => {
            //when clicked, store operator value
            calcoperator = operator.value;
            return calcoperator;
        })
    });
};
start()