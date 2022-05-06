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
            return substract(initialInput, nextInput)
        case 'multiply' :
            return multiply(initialInput, nextInput)
        case 'divide' :
            return divide(initialInput, nextInput)
    }
};